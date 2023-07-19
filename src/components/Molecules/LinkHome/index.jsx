import LinkNext from '../NextLink';
import { Content, Badge, LinkBadge } from '../../Templates/HomePage/styles';

export default function LinkHome() {
  return (
    <LinkNext href='/contact'>
      <Content>
        <Badge>O que tem de novo?</Badge>
        <LinkBadge>Confira as principais dúvidas</LinkBadge>
      </Content>
    </LinkNext>
  );
}
