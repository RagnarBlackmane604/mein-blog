'use client';

import { useRouter } from 'next/navigation';

export default function CreateBlogPage() {
  const router = useRouter();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const title = formData.get('title') as string;
    const author = formData.get('author') as string;
    const body = formData.get('body') as string;

    // Call API route or server action here
    const res = await fetch('/api/blogs', {
      method: 'POST',
      body: JSON.stringify({ title, author, body }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (res.ok) {
      router.push('/blog'); // redirect after success
    } else {
      alert('Error creating blog');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-amber-300 rounded-2xl w-full max-w-xl p-6 space-y-4 mx-auto mt-10">
      <input name="title" placeholder="Title" required className="border p-2 w-full rounded bg-amber-100 text-gray-900" />
      <input name="author" placeholder="Author" required className="border p-2 w-full rounded bg-amber-100 text-gray-900" />
      <textarea name="body" placeholder="Body" required className="border p-2 w-full rounded bg-amber-100 text-gray-900" />
      <button type="submit" className="bg-green-600 text-white p-2 rounded w-full hover:bg-green-700 transition">Create Blog</button>
    </form>
  );
}
