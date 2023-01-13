import React from 'react';
import styled from 'styled-components';
import { Container } from './Container';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

const ModeSwitcher = styled.div`
  display: flex;
  align-items: center;
  color: var(--colors-text);
  cursor: pointer;
  font-weight: var(--fw-bold);
  column-gap: 1rem;
`;

export const Header = () => {
  const [theme, setTheme] = React.useState('dark');
  const toogleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  React.useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);
  const getThemeName = () => {
    const firstCharacter = theme.charAt(0).toUpperCase();
    return firstCharacter + theme.substring(1);
  };
  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Link
            to={'/'}
            style={{
              color: 'var(--colors-text)',
              textDecoration: 'none',
              fontSize: 'var(--fs-md)',
              fontWeight: 'var(--fw-bold)',
            }}
          >
            Where is the World?
          </Link>
          <ModeSwitcher onClick={toogleTheme}>
            {theme === 'light' ? <IoMoon /> : <IoMoonOutline />}
            {getThemeName()} theme
          </ModeSwitcher>
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};
