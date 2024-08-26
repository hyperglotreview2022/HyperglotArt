import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';
import artdata from './artdata'; // Adjust the path if necessary
import artworks from './artworks'; // Adjust the path if necessary

export default async (req, res) => {
  try {
    // Define your static URLs
    const staticLinks = [
      { url: '/', changefreq: 'daily', priority: 1.0 },
      { url: '/About', changefreq: 'monthly', priority: 0.8 },
      { url: '/Amorphicchasms', changefreq: 'monthly', priority: 0.8 },
      { url: '/Artists/Featured', changefreq: 'monthly', priority: 0.8 },
      { url: '/Artists/Spotlight', changefreq: 'monthly', priority: 0.8 },
      { url: '/ContactUs', changefreq: 'monthly', priority: 0.8 },
      { url: '/Events', changefreq: 'monthly', priority: 0.8 },
      { url: '/VirtualGallery', changefreq: 'monthly', priority: 0.8 },
      { url: '/Subscriptions', changefreq: 'monthly', priority: 0.8 },
      { url: '/RedrawingArtscapes', changefreq: 'monthly', priority: 0.8 },
    ];

    // Map dynamic routes from JSON data
    const dynamicLinks = [
      ...artworks.map(art => ({
        url: `/Artistsartworks/${art.id}`, // Adjust URL structure as needed
        changefreq: 'weekly',
        priority: 0.6,
      })),
    ];

    // Combine static and dynamic links
    const links = [...staticLinks, ...dynamicLinks];

    // Create and generate sitemap
    const stream = new SitemapStream({ hostname: `https://${req.headers.host}` });
    const xmlString = await streamToPromise(Readable.from(links).pipe(stream)).then(data => data.toString());

    res.setHeader('Content-Type', 'application/xml');
    res.status(200).end(xmlString);
  } catch (error) {
    console.error('Error generating sitemap:', error);
    res.status(500).json({ error: 'Failed to generate sitemap' });
  }
};