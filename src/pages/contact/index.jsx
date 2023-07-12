import { ThemeProvider, FontLoader } from '@gympass/yoga';
import PageTitle from '../../components/PageTitle';
import LinkNext from '../../components/NextLink';
import { Main, Title, Subtitle, ListQuestions, Questions, TitleQuestions } from './styles';

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
      <Main>
        <div>
          <Title>FAQ: Perguntas Frequentes</Title>
          <Subtitle>
            Não consegue encontrar a resposta que procura? entre em contato com nosso{' '}
            <LinkNext href='mailto:contato@alura.com.br'>time de suporte ao consumidor</LinkNext>
          </Subtitle>
          <LinkNext href='/'>Voltar para a Home</LinkNext>
        </div>
        <ListQuestions>
          <ul>
            {faq.map(({ question, answer }) => (
              <Questions>
                <article>
                  <TitleQuestions>{question}</TitleQuestions>
                  <p>{answer}</p>
                </article>
              </Questions>
            ))}
          </ul>
        </ListQuestions>
      </Main>
    </ThemeProvider>
  );
}
