import { styled } from 'styled-components';
import { theme } from '@gympass/yoga';
import colors from '../../../tokens/colors';

export const Main = styled.div`
  padding: ${theme.spacing.xlarge}px;
`;

export const Title = styled.h2`
  color: ${colors.stamina};
  font-size: ${theme.fontSizes.xlarge}px;
  font-weight: ${theme.fontWeights.bold};
  letter-spacing: -0.04px;
`;

export const Subtitle = styled.p`
  font-size: ${theme.fontSizes.large}px;
  font-weight: ${theme.fontWeights.regular};
  margin: ${theme.spacing.large}px 0;
  color: ${colors.light};
`;

export const ListQuestions = styled.div`
  margin-top: ${theme.spacing.xxxlarge}px;
  line-height: ${theme.lineHeights.medium}px;
`;

export const Questions = styled.div`
  margin-top: ${theme.spacing.xxxlarge}px;
  font-size: 18px;
  font-weight: ${theme.fontWeights.regular};
  color: ${colors.light};
`;

export const TitleQuestions = styled.h2`
  font-size: ${theme.fontSizes.large}px;
  letter-spacing: -0.04px;
  font-weight: ${theme.fontWeights.bold};
  color: ${colors.stamina};
  margin-bottom: ${theme.spacing.small}px;
`;
