const blogs: Blog[] = [
  {
    id: '1',
    slug: 'erster-blogpost',
    title: 'Erster Blogpost',
    body: 'Dies ist der erste Blogpost...',
    author: 'Max Mustermann',
  },
  {
    id: '2',
    slug: 'zweiter-beitrag',
    title: 'Zweiter Beitrag',
    body: 'Ein weiterer spannender Artikel...',
    author: 'Erika Beispiel',
  },
  {
    id: '3',
    slug: 'nextjs-routing-erklaert',
    title: 'Next.js Routing erklärt',
    body: 'In diesem Artikel lernst du, wie das App-Routing in Next.js 13 funktioniert und wie du Seiten dynamisch generierst.',
    author: 'Lena Webfrau',
  },
  {
    id: '4',
    slug: 'statische-vs-serverseitige-inhalte',
    title: 'Statische vs. Serverseitige Inhalte',
    body: 'Wann sollte man getStaticProps oder Server Actions verwenden? Wir klären die Unterschiede und geben Empfehlungen.',
    author: 'Jonas Entwickler',
  },
  {
    id: '5',
    slug: 'tailwind-css-im-projekt-integrieren',
    title: 'Tailwind CSS im Projekt integrieren',
    body: 'Tailwind CSS macht Styling schneller. In diesem Beitrag zeige ich dir, wie du es optimal mit Next.js nutzt.',
    author: 'Sophie Style',
  },
  {
    id: '6',
    slug: 'client-vs-server-components',
    title: 'Client vs. Server Components',
    body: 'Verstehe den Unterschied zwischen Client- und Server-Komponenten – ein zentrales Konzept in modernen React-Apps.',
    author: 'Alex Architekt',
  },
  {
    id: '7',
    slug: 'performance-tipps-fuer-nextjs',
    title: 'Performance-Tipps für Next.js',
    body: 'Hier sind einige Best Practices, um die Ladezeit deiner Next.js-Anwendung zu verbessern.',
    author: 'Ina Optimierer',
  },
  {
    id: '8',
    slug: 'deployment-auf-vercel',
    title: 'Deployment auf Vercel',
    body: 'Ein Schritt-für-Schritt-Guide, wie du deine App kostenlos und schnell auf Vercel deployen kannst.',
    author: 'Tim Deploy',
  },
  {
    id: '9',
    slug: 'formulare-in-nextjs-richtig-verarbeiten',
    title: 'Formulare in Next.js richtig verarbeiten',
    body: 'Ein Überblick über Form-Handling mit Server Actions, useFormState und mehr.',
    author: 'Clara Code',
  },
  {
    id: '10',
    slug: 'bilder-mit-dem-nextjs-image-component',
    title: 'Bilder mit dem Next.js Image Component',
    body: 'So optimierst du Bilder und verbesserst die Performance deiner Seite mit dem <Image> Component.',
    author: 'Ben Bildner',
  },
];

export async function getAllBlogs(): Promise<Blog[]> {
  return blogs;
}

export async function getBlogById(id: string): Promise<Blog | undefined> {
  return blogs.find(blog => blog.id === id);
}

export async function getBlogBySlug(slug: string): Promise<Blog | undefined> {
  return blogs.find(blog => blog.slug === slug);
}

export async function saveBlog(blog: Omit<Blog, 'id' | 'slug'>): Promise<Blog> {
  const newBlog = {
    id: (blogs.length + 1).toString(),
    slug: blog.title.toLowerCase().replace(/\s+/g, '-'),
    ...blog
  };
  blogs.push(newBlog);
  return newBlog;
}