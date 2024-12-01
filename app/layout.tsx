import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import GoogleAnalytics from '@/components/GoogleAnalytics'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Sachin Kumar - Web Developer & Digital Marketing Expert | Greater Noida',
  description: 'Leading Web Developer and Digital Marketing Expert in Greater Noida and Gautam Buddha Nagar. Offering custom websites, ecommerce solutions, SEO services, graphic design, and video editing for local businesses.',
  keywords: [
    // ... existing keywords ...
    'web developer Greater Noida',
    'SEO expert Greater Noida',
    'digital marketing Greater Noida',
    'web development Gautam Buddha Nagar',
    'SEO services Greater Noida',
    'website designer Greater Noida',
    'digital marketing agency Gautam Buddha Nagar',
    'ecommerce website Greater Noida',
    'local SEO Greater Noida',
    'UP web developer',
    'NCR digital marketing'
  ],
  alternates: {
    canonical: 'https://www.devsachinkumar.com',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/jsm-logo.jpeg" sizes="any" />
      </head>
      <body className={inter.className}>
        
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange>

          {children}
          <GoogleAnalytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
