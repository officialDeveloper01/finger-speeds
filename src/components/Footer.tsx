import styled from 'styled-components';
import { BsGithub, BsTelegram, BsCodeSlash, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { useThemeContext } from '../hooks/useTheme';

import Tooltip from './Tooltip';
import Social from './Social';

const StyledLink = styled.a`
  &:hover {
    color: ${({ theme }) => theme.text.title};
  }
`;

const Footer = () => {
  const { systemTheme } = useThemeContext();
  return (
    <footer className='mb-3 mt-auto'>
      <div className=' flex items-center justify-between '>
        <div className='flex items-center justify-center '>
          <Tooltip tooltipId='Github'>
            <Social
              url='https://github.com/officialDeveloper01'
              tooltipContent='Github'
              tooltipId='Github'
            >
              <BsGithub className='text-2xl' />
            </Social>
          </Tooltip>
          <Tooltip tooltipId='Instagram'>
            <Social
              url='https://instagram.com/kuttyjain'
              tooltipContent='Instagram'
              tooltipId='instagram'
            >
              <BsInstagram className='text-2xl' />
            </Social>
          </Tooltip>
          <Tooltip tooltipId='Instagram'>
            <Social
              url='https://linkedin.com/in/kuttyjain'
              tooltipContent='Linkedin'
              tooltipId='linkedin'
            >
              <BsLinkedin className='text-2xl' />
            </Social>
          </Tooltip>

          <Tooltip tooltipId='telegram'>
            <Social
              url='http://t.me/kuttyjain'
              tooltipContent='Telegram'
              tooltipId='telegram'
            >
              <BsTelegram className='text-2xl ' />
            </Social>
          </Tooltip>
        </div>

        <div className='flex items-center gap-2'>
          <BsCodeSlash className='text-xl font-bold' />
          <Tooltip tooltipId='source-code'>
            <StyledLink
              theme={systemTheme}
              href='https://github.com/officialDeveloper01/finger-speeds'
              target='_blank'
              rel='noopener noreferrer'
              className='font-mono text-xl hover:underline'
              data-tooltip-content='Give me a star 😊'
              data-tooltip-id='source-code'
            >
              Source Code ⭐
            </StyledLink>
          </Tooltip>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
