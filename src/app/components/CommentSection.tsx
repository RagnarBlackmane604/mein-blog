"use client";

import { useState, useEffect } from 'react';

export default function CommentSection({ blogId }: { blogId: string }) {
  const [comments, setComments] = useState<string[]>([]);
  const [input, setInput] = useState("");

  // Lade Kommentare aus localStorage
  useEffect(() => {
    const stored = localStorage.getItem(`comments-${blogId}`);
    if (stored) setComments(JSON.parse(stored));
  }, [blogId]);

  const handleSubmit = () => {
    const newComments = [...comments, input];
    setComments(newComments);
    localStorage.setItem(`comments-${blogId}`, JSON.stringify(newComments));
    setInput("");
  };

  return (
    <div className="mt-8">
      <h3 className="font-semibold">Comments</h3>
      <ul className="list-disc ml-5">
        {comments.map((c, i) => <li key={i}>{c}</li>)}
      </ul>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        className="border rounded-2xl p-2 w-full mt-2"
      />
      <button
        onClick={handleSubmit}
        className="mt-2 bg-blue-500 rounded-2xl text-white p-2"
      >
        Add Comment
      </button>
    </div>
  );
}
