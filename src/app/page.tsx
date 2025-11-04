import { fetchVideos } from '@/lib/api';

export default async function Home() {
  const videos = await fetchVideos();
  console.log(videos);
  return (
    <div>
      {videos.map((video) => {
        const { id, title, author } = video;
        return (
          <ul>
            <li key={id}>{title}</li>
          </ul>
        );
      })}
    </div>
  );
}
