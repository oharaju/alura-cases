import PageTitle from '../../components/PageTitle';
import NextLink from '../../components/NextLink';
import { Button } from './styles';

export async function getStaticProps() {
  const faqApiUrl =
    'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json';

  const faq = await fetch(faqApiUrl)
    .then((responseApiUrl) => responseApiUrl.json())
    .then((response) => response);

  return {
    props: {
      nome: 'Júlia',
      faq,
    },
  };
}

export default function contact({ faq }) {
  return (
    <div>
      <PageTitle>Faq - Alura Cases Campanha</PageTitle>
      <h1>Alura Cases - Página de Perguntas FAQ</h1>
      <NextLink href='/'>Ir para a Home</NextLink>
      <Button>Botão Vermelho</Button>
      <ul>
        {faq.map(({ question, answer }) => (
          <article>
            <h2>{question}</h2>
            <p>{answer}</p>
          </article>
        ))}
      </ul>
    </div>
  );
}
