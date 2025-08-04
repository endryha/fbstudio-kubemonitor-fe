import Dashboard from '@/components/dashboard';
import { AppLayout } from '@/components/layout';

export default function Home() {
  return (
    <AppLayout>
      <main className="container mx-auto px-4 py-8">
        <Dashboard />
      </main>
    </AppLayout>
  );
}
