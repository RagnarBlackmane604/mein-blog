import type { NextApiRequest, NextApiResponse } from 'next';
import { saveBlog } from '@/lib/blogs';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { title, author, body } = req.body;
      if (!title || !author || !body) {
        return res.status(400).json({ error: 'Missing fields' });
      }

      const newBlog = await saveBlog({ title, author, body });
      return res.status(201).json(newBlog);
    } catch (err) {
      return res.status(500).json({ error: 'Error saving blog' });
    }
  }

  res.status(405).json({ error: 'Method not allowed' });
}
