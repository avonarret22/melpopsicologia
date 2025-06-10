const INSTAGRAM_ACCESS_TOKEN = 'YOUR_ACCESS_TOKEN'; // Replace with a valid token

async function fetchInstagramPosts() {
    const container = document.getElementById('instagram-feed');
    if (!container) return;
    try {
        const url = `https://graph.instagram.com/me/media?fields=id,media_url,permalink,caption&access_token=${INSTAGRAM_ACCESS_TOKEN}&limit=3`;
        const response = await fetch(url);
        const data = await response.json();
        if (data.data) {
            data.data.forEach(post => {
                const a = document.createElement('a');
                a.href = post.permalink;
                a.target = '_blank';
                const img = document.createElement('img');
                img.src = post.media_url;
                img.alt = post.caption ? post.caption.slice(0, 100) : 'Instagram post';
                a.appendChild(img);
                container.appendChild(a);
            });
        }
    } catch (err) {
        console.error('Error loading Instagram posts', err);
    }
}

document.addEventListener('DOMContentLoaded', fetchInstagramPosts);
