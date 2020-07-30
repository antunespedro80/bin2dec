import styled, { css } from 'styled-components';
// import bg from './assets/img/bg.jpg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-size: 1rem;
  line-height: 1.5rem;
  background: linear-gradient(45deg, rgba(0, 0, 0, 0.98), rgba(0, 0, 0, 0.96)),
    no-repeat center fixed;
  color: #fff;
`;

const TitleComponents = css`
  display: inline-block;
  font-family: Roboto Mono, Consolas, monospace;
  font-size: 3rem;
`;

export const Zeros = styled.span`
  ${TitleComponents}
  opacity: 0.05;
`;

export const Title = styled.h1`
  ${TitleComponents}
`;

export const Paragraph = styled.p`
  margin: 1.5rem 0;
`;

export const Input = styled.input`
  max-width: 80%;
  padding: 0.75rem 1rem;
  font-family: Roboto Mono, Consolas, monospace;
  font-size: 2rem;
  color: #fff;
  background: none;
  border: 1px solid #fff;
`;

export const Result = styled.p`
  margin: 2rem 0;
  font-size: 2.5rem;
  font-weight: 700;
`;
