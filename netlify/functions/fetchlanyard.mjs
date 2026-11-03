import { siteConfig } from '../../site-config.mjs';

export default async function handler() {
    const response = await fetch(`https://api.lanyard.rest/v1/users/${siteConfig.discord.userId}`);
    if (!response.ok) {
        return Response.json({ error: 'Discord presence unavailable' }, { status: 502 });
    }

    const { data } = await response.json();
    return Response.json({
        discord_user: data.discord_user,
        discord_status: data.discord_status,
        activities: data.activities
    }, { headers: { 'cache-control': 'no-store' } });
}

export const config = {
    path: '/fetchlanyard',
    method: ['GET']
};
