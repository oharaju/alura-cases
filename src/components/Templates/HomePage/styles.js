import { styled } from 'styled-components';
import { theme } from '@gympass/yoga';
import { media } from '@gympass/yoga-helpers';
import colors from '../../../tokens/colors';
import device from '../../../tokens/media';

export const Main = styled.main`
  background-color: ${colors.clear};
  padding: 119px 0;

  @media ${device.lg} {
    display: flex;
    overflow-x: hidden;
  }
`;

export const Hero = styled.div`
  padding: 0 ${theme.spacing.large}px;
  max-width: 768px;

  ${media.md`
    padding: 0 ${theme.spacing.xlarge}px;
  `}

  ${media.xl`
    margin-left: 15rem;
  `}
`;

export const LogoImg = styled.img`
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

export const ContainerBanner = styled.div`
  margin-top: ${theme.spacing.xlarge}px;

  ${media.md`
    padding: 0 ${theme.spacing.xlarge}px;
  `}

  @media ${device.lg} {
    padding: 0;
    margin: 60px 0;
  }
`;

export const BannerMain = styled.img`
  max-width: 100%;
  height: auto;
  box-shadow: 0 5px 16px 0px #11111173;

  ${media.md`
    border-radius: ${theme.radii.regular}px;
  `}

  @media ${device.lg} {
    width: auto;
  }
`;
