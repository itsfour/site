import { spawn } from 'node:child_process';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const projectDirectory = dirname(dirname(fileURLToPath(import.meta.url)));
const envFile = join(projectDirectory, '.dev.vars');

try {
    const contents = await readFile(envFile, 'utf8');
    for (const [index, line] of contents.split(/\r?\n/).entries()) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('#')) continue;

        const match = trimmed.match(/^(?:export\s+)?([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)$/);
        if (!match) throw new Error(`Invalid .dev.vars entry on line ${index + 1}.`);

        const [, name] = match;
        if (Object.hasOwn(process.env, name)) continue;

        let value = match[2].trim();
        if (value.startsWith('"') || value.startsWith("'")) {
            const quote = value[0];
            if (!value.endsWith(quote) || value.length < 2) {
                throw new Error(`Unclosed quoted value in .dev.vars on line ${index + 1}.`);
            }
            value = value.slice(1, -1);
        } else {
            value = value.replace(/\s+#.*$/, '');
        }
        process.env[name] = value;
    }
} catch (error) {
    if (error.code !== 'ENOENT') throw error;
}

const child = spawn('npx', ['netlify', 'dev'], {
    cwd: projectDirectory,
    env: process.env,
    stdio: 'inherit',
    shell: process.platform === 'win32'
});

child.on('error', error => {
    console.error('Failed to start Netlify Dev:', error.message);
    process.exitCode = 1;
});

child.on('exit', (code, signal) => {
    if (signal) {
        process.kill(process.pid, signal);
    } else {
        process.exitCode = code ?? 1;
    }
});
