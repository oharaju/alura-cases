import { ThemeProvider, FontLoader, Text } from '@gympass/yoga';
import LinkNext from '../components/NextLink';
// eslint-disable-next-line import/named
import {
  Main,
  Hero,
  Content,
  Badge,
  LinkBadge,
  MainDescription,
  Subtitle,
  InputEmail,
  Form,
  Button,
} from './styles';

export default function Home() {
  return (
    <ThemeProvider>
      <FontLoader />
      <Main>
        <Hero>
          <Content>
            <LinkNext href='/contact'>
              <Badge>O que tem de novo?</Badge>
              <LinkBadge>Confira as principais dúvidas</LinkBadge>
            </LinkNext>
          </Content>
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
      </Main>
    </ThemeProvider>
  );
}
