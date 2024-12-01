export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Sachin Kumar Digital Solutions",
          // ... existing data ...
          address: {
            "@type": "PostalAddress",
            addressLocality: "Greater Noida",
            addressRegion: "Uttar Pradesh",
            addressCountry: "IN"
          },
          areaServed: [
            {
              "@type": "City",
              name: "Greater Noida"
            },
            {
              "@type": "City",
              name: "Gautam Buddha Nagar"
            },
            {
              "@type": "State",
              name: "Uttar Pradesh"
            }
          ],
          geo: {
            "@type": "GeoCoordinates",
            latitude: "28.4744",
            longitude: "77.5040"
          },
          priceRange: "$$",
          serviceArea: ["Greater Noida", "Gautam Buddha Nagar", "NCR Region"],
          hasMap: "https://www.google.com/maps?q=greater+noida"
        })
      }}
    />
  )
} 