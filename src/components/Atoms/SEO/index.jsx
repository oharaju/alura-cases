import { NextSeo } from 'next-seo';

function SEO({ title, description }) {
  return (
    <NextSeo
      title={title}
      description={description}
      openGraph={{
        type: 'website',
        locale: 'pt-br',
        url: 'https://alura-cases-f8e4rqdkp-oharaju.vercel.app/',
        siteName: 'Alura Cases',
        images: [
          {
            url: 'https://alura-cases-f8e4rqdkp-oharaju.vercel.app/images/alura-logo.svg',
            width: 800,
            height: 600,
            alt: 'Logo Alura',
            type: 'image/svg',
          },
        ],
      }}
    />
  );
}

export default SEO;
