import { styled } from 'styled-components';
import { theme } from '@gympass/yoga';
import colors from '../../tokens/colors';

export const Title = styled.h2`
  color: ${colors.stamina};
  font-size: ${theme.fontSizes.xlarge}px;
  font-weight: ${theme.fontWeights.bold};
  letter-spacing: -0.04px;
`;

export const Subtitle = styled.p`
  font-size: ${theme.fontSizes.large}px;
  font-weight: ${theme.fontWeights.regular};
  margin-top: ${theme.spacing.small}px;
  color: ${colors.light};
`;
