import MainLayout from '@/components/Templates/MainLayout';
import ContactPage from '@/components/Templates/ContactPage';

export default function Contact({ faq }) {
  return (
    <MainLayout title='FAQ - Alura Cases' description='Descrição Faq'>
      <ContactPage faq={faq} />
    </MainLayout>
  );
}

export async function getStaticProps() {
  const faqApiUrl =
    'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json';

  const faq = await fetch(faqApiUrl)
    .then((responseApiUrl) => responseApiUrl.json())
    .then((response) => response);

  return {
    props: {
      faq,
    },
  };
}
