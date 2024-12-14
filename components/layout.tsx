import { Footer, Navigation } from '@/app/page';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex w-screen flex-col bg-gradient-to-br from-white to-blue-50">
      <Navigation />

      <main className="flex-1 w-full">{children}</main>

      <Footer />
    </div>
  );
}
