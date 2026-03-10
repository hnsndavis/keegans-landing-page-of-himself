const FEED_URL = 'https://keeganhansendavis.substack.com/feed';
const CORS_PROXY = 'https://api.allorigins.win/get?url=';

document.addEventListener('DOMContentLoaded', loadWriting);

async function loadWriting() {
    const list = document.getElementById('writing-list');
    if (!list) return;

    try {
        const res = await fetch(`${CORS_PROXY}${encodeURIComponent(FEED_URL)}`);
        const data = await res.json();
        const xml = new DOMParser().parseFromString(data.contents, 'text/xml');
        const items = Array.from(xml.querySelectorAll('item'));

        if (!items.length) throw new Error('No items');

        list.innerHTML = '';
        items.slice(0, 10).forEach(item => {
            const title = item.querySelector('title')?.textContent || '';
            const link = item.querySelector('link')?.textContent || '#';
            const pubDate = item.querySelector('pubDate')?.textContent || '';
            const date = pubDate
                ? new Date(pubDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
                : '';

            const li = document.createElement('li');
            li.innerHTML = `
                <a href="${link}" target="_blank">${title}</a>
                <span class="writing-date">${date}</span>
            `;
            list.appendChild(li);
        });
    } catch (err) {
        list.innerHTML = `<li style="color:var(--text-dim);font-style:italic;">
            <a href="https://keeganhansendavis.substack.com/archive" target="_blank">Read on Substack &rarr;</a>
        </li>`;
    }
}
