import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Products',
  description: 'Browse our extensive catalog of high-volume commercial offset printing products including catalogues, books, packaging, and more.',
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
