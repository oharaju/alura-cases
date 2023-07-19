import SEO from '@/components/Atoms/SEO';
import Footer from '@/components/Organisms/Footer';

export default function MainLayout({ title, description, children }) {
  return (
    <>
      <SEO description={description} title={title} />
      {children}
      <Footer />
    </>
  );
}
