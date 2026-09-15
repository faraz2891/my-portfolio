import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
   variable: '--font-geist-sans',
   subsets: ['latin'],
});

const geistMono = Geist_Mono({
   variable: '--font-geist-mono',
   subsets: ['latin'],
});

export const metadata: Metadata = {
   title: 'Syed Faraz Portfolio',
   description:
      'Created by Syed Faraz Ali who is a Senior Frontend Developer and a React.js Expert over 10 years of experience. He is also a Next.js Expert and has been working with Next.js for the past 3 years. ',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
   return (
      <html
         lang="en"
         className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      >
         <body suppressHydrationWarning className="min-h-full flex flex-col">
            {children}
         </body>
      </html>
   );
}
