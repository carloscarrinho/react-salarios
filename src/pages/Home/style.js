import styled from 'styled-components';

export const Header = styled.header`
  background-color: #1B998B;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10vh;

  svg {
    font-size: 3em;
    margin: auto 25px;
    color: #FFF;
  }


  h1 {
    font-size: 2.5em;
    color: #FFF;
  }
`;

export const Footer = styled.footer`
  background-color: #111;
  width: 100%;
  height: 40px;
  color: #FFF;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;

  svg {
    color: #f00;
    margin: auto 10px;
    font-size: 20px;
  }

  a {
    margin-left: 10px;
    text-decoration: none;
    color: #FFF;
    font-weight: bold;
    font-size: 18px;

    &:hover {
      color: #f00;
    }
  }
`;