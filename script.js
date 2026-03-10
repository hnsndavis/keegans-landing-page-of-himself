const SUBSTACK_URL = 'https://keeganhansendavis.substack.com';
const RSS2JSON = 'https://api.rss2json.com/v1/api.json';

document.addEventListener('DOMContentLoaded', loadWriting);

async function loadWriting() {
    const list = document.getElementById('writing-list');
    if (!list) return;

    try {
        const res = await fetch(`${RSS2JSON}?rss_url=${encodeURIComponent(SUBSTACK_URL + '/feed')}`);
        const data = await res.json();

        if (data.status !== 'ok' || !data.items.length) throw new Error('Feed empty');

        list.innerHTML = '';
        data.items.forEach(item => {
            const li = document.createElement('li');
            const date = new Date(item.pubDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            });
            li.innerHTML = `
                <a href="${item.link}" target="_blank">${item.title}</a>
                <span class="writing-date">${date}</span>
            `;
            list.appendChild(li);
        });
    } catch (err) {
        list.innerHTML = `<li style="color:var(--text-dim);font-size:15px;">
            Could not load posts — <a href="${SUBSTACK_URL}/archive" target="_blank">read on Substack</a>.
        </li>`;
    }
}
