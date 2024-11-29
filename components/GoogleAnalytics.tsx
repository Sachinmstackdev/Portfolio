'use client';

import Script from 'next/script'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

declare global {
  interface Window {
    gtag: (command: string, ...args: any[]) => void;
  }
}

export default function GoogleAnalytics() {
  const pathname = usePathname()

  useEffect(() => {
    if (pathname) {
      window.gtag('config', 'G-L45J13GW4D', {
        page_path: pathname,
        transport_type: 'beacon',
      })
    }
  }, [pathname])

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-L45J13GW4D`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-L45J13GW4D', {
              page_path: window.location.pathname,
              transport_type: 'beacon',
              send_page_view: true,
              anonymize_ip: true,
              cookie_flags: 'SameSite=None;Secure'
            });
          `,
        }}
      />
    </>
  )
} 