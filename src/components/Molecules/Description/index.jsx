import { Text } from '@gympass/yoga';
import {
  MainDescription,
  Subtitle,
  InputEmail,
  Form,
  Button,
} from '../../Templates/HomePage/styles';

export default function Description() {
  return (
    <MainDescription>
      <Text.H1>Alura Cases</Text.H1>
      <Subtitle>
        Aqui você vai ter acesso a discussões avançadas: as principais decisões sobre arquitetura e
        design de sistemas. Aprenda através das descobertas que as principais empresas de tecnologia
        enfrentam!
      </Subtitle>
      <Subtitle>Quer testar antes de todo mundo?</Subtitle>
      <Form>
        <InputEmail placeholder='Coloque seu email aqui' />
        <Button type='button'>Cadastrar</Button>
      </Form>
    </MainDescription>
  );
}
