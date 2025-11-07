import Link from 'next/link';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="p-6 max-w-6xl mx-auto">
      <Link href="/" className="text-blue-500 hover:underline">
        ← Back to catalog
      </Link>
      <div className="mt-4">{children}</div>
    </section>
  );
};

export default layout;
