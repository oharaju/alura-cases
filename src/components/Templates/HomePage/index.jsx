import { Main, Hero, Content, Badge, LinkBadge } from './styles';
import Logo from '@/components/Atoms/Logo';
import LinkHome from '@/components/Molecules/LinkHome';
import Description from '@/components/Molecules/Description';
import Banner from '@/components/Atoms/Banner';

export default function HomePage() {
  return (
    <Main>
      <Hero>
        <Logo />
        <LinkHome href='/contact'>
          <Content>
            <Badge>O que tem de novo?</Badge>
            <LinkBadge>Confira as principais dúvidas</LinkBadge>
          </Content>
        </LinkHome>
        <Description />
      </Hero>
      <Banner />
    </Main>
  );
}
