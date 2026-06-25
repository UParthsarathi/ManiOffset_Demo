import { Inter, Playfair_Display, JetBrains_Mono } from 'next/font/google';
// import { FloatingCalculatorButton } from '@/components/FloatingCalculatorButton';
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

import { Metadata } from 'next';
import StructuredData from '@/components/StructuredData';
import { generateOrganizationSchema, generateLocalBusinessSchema } from '@/lib/seo';

export const metadata: Metadata = {
  metadataBase: new URL('https://feeltheprint.com'),
  title: {
    default: 'Mani Offset | Premium Commercial Printing Services in Sivakasi',
    template: '%s | Mani Offset',
  },
  description: 'Unparalleled volume commercial offset printing services. Based in Sivakasi, South India, delivering high-quality print solutions nationwide.',
  keywords: ['offset printing', 'commercial printing', 'Sivakasi printers', 'bulk printing', 'Mani Offset', 'FeelThePrint', 'book printing', 'catalog printing'],
  authors: [{ name: 'Mani Offset' }],
  creator: 'Mani Offset',
  publisher: 'Mani Offset',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Mani Offset | Premium Commercial Printing Services',
    description: 'High-volume commercial offset printing services from Sivakasi, delivering absolute structural integrity and optical fidelity.',
    url: 'https://feeltheprint.com',
    siteName: 'Mani Offset',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mani Offset | Premium Commercial Printing',
    description: 'High-volume commercial offset printing services from Sivakasi.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${playfair.variable} ${jetbrainsMono.variable}`}>
      <body suppressHydrationWarning className="font-sans antialiased text-slate-900 bg-white">
        <StructuredData data={generateOrganizationSchema()} />
        <StructuredData data={generateLocalBusinessSchema()} />
        {children}
        {/* <FloatingCalculatorButton /> */}
      </body>
    </html>
  )
}
