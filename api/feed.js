export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');

    try {
        const response = await fetch('https://keeganhansendavis.substack.com/feed');
        const xml = await response.text();
        res.setHeader('Content-Type', 'application/xml');
        res.status(200).send(xml);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch feed' });
    }
}
