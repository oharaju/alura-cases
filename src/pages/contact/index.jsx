import { ThemeProvider, FontLoader, Text } from '@gympass/yoga';
import PageTitle from '../../components/PageTitle';
import LinkNext from '../../components/NextLink';
import { Title, Subtitle } from './styles';

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

export default function contact({ faq }) {
  return (
    <ThemeProvider>
      <FontLoader />
      <PageTitle>Faq - Alura Cases Campanha</PageTitle>
      <div>
        <Title>FAQ: Perguntas Frequentes</Title>
        <Subtitle>
          Não consegue encontrar a resposta que procura? entre em contato com nosso{' '}
          <LinkNext href='mailto:contato@alura.com.br'>time de suporte ao consumidor</LinkNext>
        </Subtitle>
        <LinkNext href='/'>Ir para a Home</LinkNext>
      </div>

      <ul>
        {faq.map(({ question, answer }) => (
          <article>
            <h2>{question}</h2>
            <p>{answer}</p>
          </article>
        ))}
      </ul>
    </ThemeProvider>
  );
}
