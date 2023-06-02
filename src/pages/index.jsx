import { ThemeProvider, FontLoader, Text } from '@gympass/yoga';
import NextLink from '../components/NextLink';
// eslint-disable-next-line import/named
import { Main, Hero, Content, Badge, LinkBadge, MainDescription, Subtitle } from './styles';

export default function Home() {
  return (
    <ThemeProvider>
      <FontLoader />
      <Main>
        <Hero>
          <Content>
            <NextLink href='/contact'>
              <Badge>O que tem de novo?</Badge>
              <LinkBadge>Confira as principais dúvidas</LinkBadge>
            </NextLink>
          </Content>
          <MainDescription>
            <Text.H1>Alura Cases</Text.H1>
            <Subtitle>
              Aqui você vai ter acesso a discussões avançadas: as principais decisões sobre
              arquitetura e design de sistemas. Aprenda através das descobertas que as principais
              empresas de tecnologia enfrentam!
            </Subtitle>
            <Subtitle>Quer testar antes de todo mundo?</Subtitle>
          </MainDescription>
          <form>
            <input placeholder='Coloque seu email aqui' />
            <button type='button'>Cadastrar</button>
          </form>
        </Hero>
      </Main>
    </ThemeProvider>
  );
}
