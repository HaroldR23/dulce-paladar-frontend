const productCatalogSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Catálogo Dulce Paladar — Pastelería Artesanal Villavicencio',
  description:
    'Catálogo de productos artesanales de Dulce Paladar en Villavicencio, Meta, Colombia.',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'Product',
        name: 'Tortas de Cumpleaños Personalizadas',
        description:
          'Tortas artesanales de cumpleaños personalizadas en Villavicencio, Meta. Disponibles en Red Velvet, Chocolate, Zanahoria y más.',
        brand: { '@type': 'Brand', name: 'Dulce Paladar' },
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'COP',
          offerCount: '11',
          availability: 'https://schema.org/PreOrder',
          seller: { '@type': 'LocalBusiness', name: 'Dulce Paladar' },
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'Product',
        name: 'Tortas Infantiles Personalizadas',
        description:
          'Tortas infantiles temáticas y personalizadas para fiestas de niños en Villavicencio, Meta.',
        brand: { '@type': 'Brand', name: 'Dulce Paladar' },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'COP',
          availability: 'https://schema.org/PreOrder',
          seller: { '@type': 'LocalBusiness', name: 'Dulce Paladar' },
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 3,
      item: {
        '@type': 'Product',
        name: 'Tortas de Bodas',
        description:
          'Tortas de bodas artesanales y elegantes en Villavicencio, Meta. Diseños personalizados para tu día especial.',
        brand: { '@type': 'Brand', name: 'Dulce Paladar' },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'COP',
          availability: 'https://schema.org/PreOrder',
          seller: { '@type': 'LocalBusiness', name: 'Dulce Paladar' },
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 4,
      item: {
        '@type': 'Product',
        name: 'Mesas Dulces Villavicencio',
        description:
          'Mesas dulces personalizadas para eventos y celebraciones en Villavicencio, Meta, Colombia.',
        brand: { '@type': 'Brand', name: 'Dulce Paladar' },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'COP',
          availability: 'https://schema.org/PreOrder',
          seller: { '@type': 'LocalBusiness', name: 'Dulce Paladar' },
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 5,
      item: {
        '@type': 'Product',
        name: 'Cupcakes y Postres Artesanales',
        description:
          'Cupcakes artesanales, galletas decoradas y postres personalizados en Villavicencio, Meta.',
        brand: { '@type': 'Brand', name: 'Dulce Paladar' },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'COP',
          availability: 'https://schema.org/PreOrder',
          seller: { '@type': 'LocalBusiness', name: 'Dulce Paladar' },
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 6,
      item: {
        '@type': 'Product',
        name: 'Tortas de Grados y Bautizos',
        description:
          'Tortas personalizadas para grados y bautizos en Villavicencio, Meta, Colombia.',
        brand: { '@type': 'Brand', name: 'Dulce Paladar' },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'COP',
          availability: 'https://schema.org/PreOrder',
          seller: { '@type': 'LocalBusiness', name: 'Dulce Paladar' },
        },
      },
    },
  ],
};

const ProductSchema = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(productCatalogSchema) }}
  />
);

export default ProductSchema;
