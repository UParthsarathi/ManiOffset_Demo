export const generateOrganizationSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Mani Offset',
    url: 'https://feeltheprint.com',
    logo: 'https://feeltheprint.com/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'contact@feeltheprint.com',
      contactType: 'customer service',
      availableLanguage: ['English', 'Tamil'],
    },
    sameAs: [
      // Add social links here when available
    ],
  };
};

export const generateLocalBusinessSchema = () => {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Mani Offset - Sivakasi (Headquarters)',
      image: 'https://feeltheprint.com/logo.png',
      '@id': 'https://feeltheprint.com/#sivakasi',
      url: 'https://feeltheprint.com',
      email: 'contact@feeltheprint.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Kamaraj Salai',
        addressLocality: 'Sivakasi',
        addressRegion: 'Tamil Nadu',
        postalCode: '626123',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 9.4533,
        longitude: 77.8024,
      },
      priceRange: '$$$',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Mani Offset - Chennai Branch',
      image: 'https://feeltheprint.com/logo.png',
      '@id': 'https://feeltheprint.com/#chennai',
      url: 'https://feeltheprint.com',
      email: 'contact@feeltheprint.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'No: 112/2, Triplicane, Bells Road, Chepauk',
        addressLocality: 'Chennai',
        addressRegion: 'Tamil Nadu',
        postalCode: '600005',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 13.0634,
        longitude: 80.2804,
      },
      priceRange: '$$$',
    }
  ];
};

export const generateBreadcrumbSchema = (items: { name: string; url: string }[]) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
};

export const generateProductSchema = (product: {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.description,
    image: product.imageUrl,
    category: product.category,
    brand: {
      '@type': 'Brand',
      name: 'Mani Offset',
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      lowPrice: '1000',
      highPrice: '100000',
      offerCount: '1',
    },
  };
};
