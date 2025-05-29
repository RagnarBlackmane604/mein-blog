// src/app/api/blogs/route.ts
import { saveBlog } from '@/lib/blogs';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { title, author, body } = await req.json();

    if (!title || !author || !body) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    const newBlog = await saveBlog({ title, author, body });
    return NextResponse.json(newBlog, { status: 201 });
  } catch (error) {
    console.error('API Fehler:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

