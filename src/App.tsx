import React from 'react';
import logo from './logo.svg';
import styled from 'styled-components';
import { GlobalStyle } from './styles/global';
const Title = styled.h1`
  color: blue;
`;
export function App() {
  return (
    <div className="App">
      <Title>Hello World!</Title>
      <GlobalStyle/>
    </div>
  );
}