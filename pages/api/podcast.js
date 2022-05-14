import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const podcastData = JSON.parse(req.body);
    const savedPodcast = await prisma.podcast.create({ data: podcastData });
    res.status(200).json(savedPodcast);
  } catch (err) {
    res.status(400).json({ message: 'Something went wrong' });
  }
};
