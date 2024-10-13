import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { SidebarProvider } from '@/hooks/use-sidebar';

export const queryClient = new QueryClient();



export default function AppProvider({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense>
      <HelmetProvider>
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <SidebarProvider>{children}</SidebarProvider>
            </QueryClientProvider>
        </BrowserRouter>
      </HelmetProvider>
    </Suspense>
  );
}
