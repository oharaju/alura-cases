import MainLayout from '@/components/Templates/MainLayout';
import HomePage from '@/components/Templates/HomePage';

export default function Home() {
  return (
    <MainLayout
      title='Home - Alura Cases'
      description='Aprenda através das descobertas que as principais empresas de tecnologia enfrentam!'
    >
      <HomePage />
    </MainLayout>
  );
}
