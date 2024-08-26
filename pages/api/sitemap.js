import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';

export default async (req, res) => {
  const links = [
    { url: '/', changefreq: 'daily', priority: 0.7 },
    // Add more routes dynamically if needed
  ];

  const stream = new SitemapStream({ hostname: `https://${req.headers.host}` });
  const xmlString = await streamToPromise(Readable.from(links).pipe(stream)).then(data => data.toString());

  res.setHeader('Content-Type', 'application/xml');
  res.write(xmlString);
  res.end();
};