import { styled } from 'styled-components';
import { theme } from '@gympass/yoga';
import colors from '../../tokens/colors';

export const FooterBackground = styled.footer`
  background-color: ${colors.stamina};
`;

export const ContainerBackground = styled.div`
  overflow: hidden;
  max-width: 1280px;
  margin: 0 auto;
  padding: 51px;
`;

export const Texto = styled.p`
  font-size: ${theme.fontSizes.small}px;
  font-weight: ${theme.fontWeights.regular};
  text-align: center;
  color: ${colors.deep};
`;
