
import Link from 'next/link';
import Image from 'next/image';
import { Blog } from '@/lib/types';

type BlogCardProps = {
  blog: Blog;
};

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <Link href={`/blog/${blog.id}`} className="bg-amber-300 block max-w-3xl rounded p-4 shadow-xl shadow-amber-500 hover:bg-amber-200">
      <h2 className="text-xl font-bold">{blog.title}</h2>
      <p className="text-sm text-gray-500">by {blog.author}</p>
      <Image src="/images/sample.jpg" width={600} height={400} alt="cover" className="my-2" />
      <p>{blog.body.substring(0, 100)}...</p>
    </Link>
  );
}
