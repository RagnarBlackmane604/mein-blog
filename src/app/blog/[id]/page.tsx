import { getBlogById } from '@/lib/blogs';
import CommentSection from '@/app/components/CommentSection';

type BlogDetailProps = {
  params: {
    id: string;
  };
};

export default async function BlogDetail({ params }: BlogDetailProps) {
  const {id} = await params;
  const blog = await getBlogById(id);

  if (!blog) {
    return <p className="text-center mt-10 text-red-600">Blog nicht gefunden.</p>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <article className="bg-white rounded-2xl shadow-xl p-8 max-w-3xl w-full space-y-6">
        <h1 className="bg-amber-300 rounded-xl p-4 text-3xl font-bold text-center">
          {blog.title}
        </h1>
        <p className="text-sm text-gray-600 text-center">by {blog.author}</p>
        <p className="text-lg leading-relaxed text-gray-800">{blog.body}</p>
        <hr className="my-6 border-gray-300" />
        <CommentSection blogId={blog.id} />
      </article>
    </div>
  );
}
