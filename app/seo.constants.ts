import type { Metadata } from "next";

export const BASE_URL = 'https://dulcepaladar.net';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Dulce Paladar | Pastelería en Villavicencio | Tortas Personalizadas | Galletas Decoradas | Cupcakes | Mesas Dulces | Repostería',
    template: '%s | Dulce Paladar',
  },
  description:
    'Pastelería artesanal en Villavicencio, Meta, Colombia. Tortas personalizadas, tortas de cumpleaños, cupcakes, galletas y mesas dulces hechas a pedido con ingredientes de primera calidad. ¡Cotiza tu torta ideal!',
  keywords: [
    'pastelería Villavicencio',
    'pasteleria Villavicencio',
    'pasteleria villavicencio',
    'tortas villavicencio',
    'tortas Villavicencio',
    'tortas Colombia',
    'pasteles Villavicencio',
    'repostería Villavicencio',
    'reposteria Villavicencio',
    'tortas personalizadas Villavicencio',
    'tortas artesanales Villavicencio',
    'tortas de cumpleaños Villavicencio',
    'tortas infantiles Villavicencio',
    'tortas de bodas Villavicencio',
    'pastelería a domicilio Villavicencio',
    'mesas dulces Villavicencio',
    'cupcakes Villavicencio',
    'tortas artesanales Meta Colombia',
    'pastelería Meta Colombia',
    'repostería artesanal Colombia',
    'Dulce Paladar',
    'Paladar Dulce',
    'tortas personalizadas Meta',
    
  ],
  authors: [{ name: 'Dulce Paladar', url: BASE_URL }],
  creator: 'Dulce Paladar',
  publisher: 'Dulce Paladar',
  alternates: {
    canonical: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: BASE_URL,
    siteName: 'Dulce Paladar',
    title: 'Dulce Paladar | Pastelería Artesanal en Villavicencio, Meta',
    description:
      'Pastelería artesanal en Villavicencio, Meta, Colombia. Tortas personalizadas, cupcakes, galletas y mesas dulces hechos con amor y a pedido.',
    images: [
      {
        url: '/favicon.ico',
        width: 1200,
        height: 630,
        alt: 'Dulce Paladar — Pastelería Artesanal en Villavicencio, Meta, Colombia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dulce Paladar | Pastelería Artesanal en Villavicencio, Meta',
    description:
      'Tortas personalizadas, cupcakes y mesas dulces hechos con amor en Villavicencio, Meta, Colombia.',
    images: ['/favicon.ico'],
  },
  other: {
    instagram: 'https://www.instagram.com/dulcepaladartortasypostres',
    facebook: 'https://www.facebook.com/share/17xTQcCaWp/',
  },
};

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'Bakery',
  name: 'Dulce Paladar',
  description:
    'Pastelería artesanal en Villavicencio, Meta, Colombia. Tortas personalizadas, cupcakes, galletas y mesas dulces elaboradas a pedido con ingredientes de primera calidad.',
  url: BASE_URL,
  telephone: '+573133095186',
  email: 'dulcepaladartyp@gmail.com',
  priceRange: '$$',
  currenciesAccepted: 'COP',
  paymentAccepted: 'Efectivo, Transferencia bancaria, Nequi, Daviplata',
  areaServed: [
    { '@type': 'City', name: 'Villavicencio' },
    { '@type': 'State', name: 'Meta' },
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Villavicencio',
    addressRegion: 'Meta',
    addressCountry: 'CO',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 4.142,
    longitude: -73.6266,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '19:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '10:00',
      closes: '14:00',
    },
  ],
  servesCuisine: 'Pastelería artesanal',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Catálogo Dulce Paladar',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tortas de Cumpleaños personalizadas' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tortas Infantiles personalizadas' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tortas de Bodas' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cupcakes artesanales' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Galletas decoradas' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mesas dulces' } },
    ],
  },
  sameAs: [
    'https://www.instagram.com/dulcepaladartortasypostres',
    'https://www.facebook.com/share/17xTQcCaWp/',
  ],
  image: `${BASE_URL}/favicon.ico`,
  foundingDate: '2016',
  founder: { '@type': 'Person', name: 'Necda Rodriguez' },
};
