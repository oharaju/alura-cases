import { styled } from 'styled-components';
import { theme } from '@gympass/yoga';
import colors from '../tokens/colors';

export const Main = styled.div`
  background-color: ${colors.clear};
  padding-top: ${theme.spacing.xxxlarge}px;
`;

export const Hero = styled.div`
  padding-left: ${theme.spacing.large}px;
  padding-right: ${theme.spacing.large}px;
  max-width: 768px;
`;

export const Content = styled.div`
  margin-top: ${theme.spacing.xhuge}px;
`;

export const NextLink = styled.a`
  text-decoration: none;
`;

export const Badge = styled.span`
  background-color: ${colors.neutral};
  color: ${colors.relax};
  font-size: ${theme.fontSizes.xsmall}px;
  font-weight: ${theme.fontWeights.medium};
  border-radius: ${theme.radii.circle}px;
  padding: ${theme.spacing.xxxsmall}px ${theme.spacing.xsmall}px;
  margin-right: ${theme.spacing.xxsmall}px;
`;

export const LinkBadge = styled.span`
  font-size: ${theme.fontSizes.xsmall}px;
  font-weight: ${theme.fontWeights.medium};
  color: ${colors.relax};
`;

export const MainDescription = styled.div`
  margin-top: ${theme.spacing.xxlarge}px;
`;

export const Subtitle = styled.p`
  color: ${colors.light};
  font-size: 18px;
  font-weight: ${theme.fontWeights.regular};
  line-height: ${theme.lineHeights.medium}px;
  margin-top: ${theme.spacing.xlarge}px;
`;
