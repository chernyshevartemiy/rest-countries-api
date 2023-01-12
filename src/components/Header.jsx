import React from 'react';
import styled from 'styled-components';
import { Container } from './Container';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';

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

const Title = styled.a.attrs({
  href: '/',
})`
  color: var(--colors-text);
  font-size: var(--fs-md);
  text-decoration: none;
  font-weight: var(--fw-bold);
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
  const [theme, setTheme] = React.useState('light');
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
          <Title>Where is the World?</Title>
          <ModeSwitcher onClick={toogleTheme}>
            {theme === 'light' ? <IoMoon /> : <IoMoonOutline />}
            {getThemeName()} theme
          </ModeSwitcher>
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};
