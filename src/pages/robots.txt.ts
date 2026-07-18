import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
return new Response(
`
User-agent: \*
Allow: /

Sitemap: https://derriere-modas.vercel.app/sitemap-index.xml

Disallow: /admin/
Disallow: /api/
Disallow: /cdn-cgi/
Disallow: /\_astro/
Disallow: /\_vercel/
Disallow: /studio/
Disallow: /search/
Disallow: /_.json$
Disallow: /_.xml$

Crawl-delay: 1
`.trim(),
{
headers: {
'Content-Type': 'text/plain',
},
}
);
};