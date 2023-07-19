import LinkNext from '@/components/Molecules/NextLink';
import { Main, Title, Subtitle, ListQuestions, Questions, TitleQuestions } from './styles';

export default function ContactPage({ faq }) {
  return (
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
  );
}
