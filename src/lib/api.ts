import { Video } from './types';

export async function fetchVideos(signal?: AbortSignal): Promise<Video[]> {
  // We get an absolute URL suitable for both localhost and production
  const baseUrl = 'http://localhost:3000';

  const res = await fetch(`${baseUrl}/api/videos`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch videos');
  }

  return await res.json();
}
