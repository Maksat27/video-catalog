import { fetchVideos } from '@/lib/api';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import Providers from './providers';
import Catalog from '@/components/Catalog';

export default async function Home() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['videos'],
    queryFn: fetchVideos,
  });

  const state = dehydrate(queryClient);
  return (
    <Providers state={state}>
      <main>
        <Catalog />
      </main>
    </Providers>
  );
}
