export const siteConfig = {
    github: {
        username: 'itsfour',
        profileUrl: 'https://github.com/itsfour'
    },
    discord: {
        userId: '458318691172352012',
        username: '@_itsfour',
        profileUrl: 'https://discord.com/users/458318691172352012',
        inviteCode: 'y84SevVH8F'
    },
    facebook: {
        username: '@itsthientu',
        profileUrl: 'https://www.facebook.com/itsthientu/',
        messengerUrl: 'https://m.me/itsthientu'
    },
    tiktok: {
        username: '@_itsfour',
        profileUrl: 'https://www.tiktok.com/@_itsfour'
    },
    email: 'itsfour.932@gmail.com'
};

if (typeof document !== 'undefined') {
    const links = {
        github: siteConfig.github.profileUrl,
        discord: siteConfig.discord.profileUrl,
        facebook: siteConfig.facebook.profileUrl,
        tiktok: siteConfig.tiktok.profileUrl,
        email: `mailto:${siteConfig.email}`,
        messenger: siteConfig.facebook.messengerUrl,
        'discord-invite': `https://discord.com/invite/${siteConfig.discord.inviteCode}`,
        'discord-app-invite': `discord://-/invite/${siteConfig.discord.inviteCode}`
    };
    const labels = {
        'github.username': siteConfig.github.username,
        'discord.username': siteConfig.discord.username,
        'facebook.username': siteConfig.facebook.username,
        'tiktok.username': siteConfig.tiktok.username,
        email: siteConfig.email
    };

    for (const link of document.querySelectorAll('[data-site-link]')) {
        const url = links[link.dataset.siteLink];
        if (url) link.href = url;
    }

    for (const label of document.querySelectorAll('[data-site-label]')) {
        const value = labels[label.dataset.siteLabel];
        if (value) label.textContent = value;
    }

    for (const link of document.querySelectorAll('[data-github-repo]')) {
        link.href = `${siteConfig.github.profileUrl}/${link.dataset.githubRepo}`;
    }

    for (const name of document.querySelectorAll('[data-github-owner-label]')) {
        name.textContent = name.textContent.replace(/^[^/]+\//, `${siteConfig.github.username}/`);
    }
}
