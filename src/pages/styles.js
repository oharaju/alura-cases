import { styled } from 'styled-components';
import { theme } from '@gympass/yoga';
import { media } from '@gympass/yoga-helpers';
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

export const Logo = styled.img`
  width: auto;
  height: 44px;
`;

export const Content = styled.div`
  margin-top: ${theme.spacing.xhuge}px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  ${media.xs`
    flex-direction: row;
    align-items: center;
  `}
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

export const Form = styled.form`
  margin-top: 48px;
`;

export const InputEmail = styled.input`
  color: ${colors.stamina};
  font-size: ${theme.fontSizes.medium}px;
  font-weight: ${theme.fontWeights.regular};
  padding: ${theme.spacing.xsmall}px ${theme.spacing.medium}px;
  transition: all 0.2s ease-in-out;
  outline: 0;
  box-shadow: 0 5px 7px -5px #11111143;
  display: block;
  width: 100%;
  border: 1px solid #b1b1b1;
  border-radius: 8px;
  box-sizing: border-box;
`;

export const Button = styled.button`
  background-color: ${colors.primary};
  color: ${colors.white};
  font-size: ${theme.fontSizes.medium}px;
  font-weight: ${theme.fontWeights.regular};
  border-radius: ${theme.radii.small}px;
  margin-top: ${theme.spacing.small}px;
  cursor: pointer;
  box-shadow: 0 5px 7px -5px #11111143;
  display: block;
  outline: 0;
  width: 100%;
  border: 1px solid #240754;
  padding: ${theme.spacing.xsmall}px ${theme.spacing.medium}px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${colors.primary};
    opacity: 0.9;
  }
`;
