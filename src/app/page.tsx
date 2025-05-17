
import { getAllBlogs } from '@/lib/blogs';
import BlogCard from './components/BlogCard';

export default async function HomePage() {
  const blogs = await getAllBlogs(); // Simulate DB fetch

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 space-y-6">
    <main className="p-6 space-y-4">
      {blogs.map(blog => <BlogCard key={blog.id} blog={blog} />)}
    </main>
    </div>
  );
}
