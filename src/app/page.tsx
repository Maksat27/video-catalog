export default async function Home() {
  // We get an absolute URL suitable for both localhost and production
  const baseUrl = 'http://localhost:3000';

  const res = await fetch(`${baseUrl}/api/videos`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch videos');
  }

  const videos = await res.json();
  console.log(videos);

  return <div>Hello</div>;
}
