export default async function handler() {
    const max = 267;
    const response = await fetch(`https://raw.githubusercontent.com/itsfourvn/chino.webp/main/${Math.ceil(Math.random() * max)}.webp`);
    if (!response.ok) {
        return new Response('Image unavailable', { status: 502 });
    }

    return new Response(response.body, {
        headers: {
            'content-type': 'image/webp',
            'cache-control': 'no-cache, no-store, must-revalidate, max-age=0'
        }
    });
}

export const config = {
    path: '/chino',
    method: ['GET']
};
