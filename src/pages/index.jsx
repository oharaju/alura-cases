import { ThemeProvider, FontLoader, Text } from '@gympass/yoga';
import PageTitle from '../components/PageTitle';
import LinkNext from '../components/NextLink';
import {
  Main,
  Hero,
  Logo,
  Content,
  Badge,
  LinkBadge,
  MainDescription,
  Subtitle,
  InputEmail,
  Form,
  Button,
  ContainerBanner,
  Banner,
} from './styles';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <ThemeProvider>
      <FontLoader />
      <PageTitle>Home - Alura Cases Campanha</PageTitle>
      <Main>
        <Hero>
          <Logo src='./images/alura-logo.svg' alt='Logo Alura' />
          <LinkNext href='/contact'>
            <Content>
              <Badge>O que tem de novo?</Badge>
              <LinkBadge>Confira as principais dúvidas</LinkBadge>
            </Content>
          </LinkNext>
          <MainDescription>
            <Text.H1>Alura Cases</Text.H1>
            <Subtitle>
              Aqui você vai ter acesso a discussões avançadas: as principais decisões sobre
              arquitetura e design de sistemas. Aprenda através das descobertas que as principais
              empresas de tecnologia enfrentam!
            </Subtitle>
            <Subtitle>Quer testar antes de todo mundo?</Subtitle>
            <Form>
              <InputEmail placeholder='Coloque seu email aqui' />
              <Button type='button'>Cadastrar</Button>
            </Form>
          </MainDescription>
        </Hero>
        <ContainerBanner>
          <Banner src='./images/alura-cases.png' alt='Banner Alura' />
        </ContainerBanner>
      </Main>
      <Footer />
    </ThemeProvider>
  );
}
