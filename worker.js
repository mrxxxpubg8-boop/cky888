const PC28_URL = 'https://pc28.help/kj.json?limit=60';

export default {
  async fetch() {
    const r = await fetch(PC28_URL, {
      headers: { 'User-Agent': 'Mozilla/5.0', 'Accept': 'application/json' },
      cf: { cacheTtl: 0 }
    });

    return new Response(await r.text(), {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'no-store'
      }
    });
  }
};
