import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';

export default async (req, res) => {
  // Define your URLs here
  const links = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    // Add other static or dynamic routes here
    { url: '/About', changefreq: 'monthly', priority: 0.8 },
    { url: '/Amorphicchasms', changefreq: 'monthly', priority: 0.8 },
    { url: '/Artists/Featured', changefreq: 'monthly', priority: 0.8 },
    { url: '/Artists/Spotlight', changefreq: 'monthly', priority: 0.8 },
    { url: '/ContactUs', changefreq: 'monthly', priority: 0.8 },
    { url: '/Events', changefreq: 'monthly', priority: 0.8 },
    { url: '/VirtualGallery', changefreq: 'monthly', priority: 0.8 },
    { url: '/Subscriptions', changefreq: 'monthly', priority: 0.8 },
    { url: '/RedrawingArtscapes', changefreq: 'monthly', priority: 0.8 },
    // Example of dynamic content
    { url: `/Artistsartworks/${post.id}`, changefreq: 'weekly', priority: 0.6 },
    { url: `/Gernre/${post.id}`, changefreq: 'weekly', priority: 0.6 },
    { url: `/Medium/${post.id}`, changefreq: 'weekly', priority: 0.6 },
    { url: `/SingleProduct/${post.id}`, changefreq: 'weekly', priority: 0.6 },
  ];

  // Fetch dynamic routes if needed
  // const dynamicRoutes = await fetchDynamicRoutes();
  // links.push(...dynamicRoutes);

  const stream = new SitemapStream({ hostname: `https://${req.headers.host}` });
  const xmlString = await streamToPromise(Readable.from(links).pipe(stream)).then(data => data.toString());

  res.setHeader('Content-Type', 'application/xml');
  res.write(xmlString);
  res.end();
};

// Example function to fetch dynamic routes
// async function fetchDynamicRoutes() {
//   const posts = await fetch('https://yourapi.com/posts').then(res => res.json());
//   return posts.map(post => ({ url: `/blog/${post.id}`, changefreq: 'weekly', priority: 0.6 }));
// }
