import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const GradientTitle = ({ children }) => (
  <Container>
    <Under>{children}</Under>
    <Over>{children}</Over>
  </Container>
);

GradientTitle.propTypes = {
  children: PropTypes.node,
};

export default GradientTitle;

const Container = styled.div`
  font-family: 'Another Danger';
  font-size: 70px;
  position: relative;
  background-clip: auto;
  grid-area: title;
  width: max-content;
  justify-self: center;
  @media only screen and (max-width: 400px) {
    font-size: 50px;
  }
`;

const Under = styled.div`
  background: linear-gradient(
    0.1turn,
    ${({ theme }) =>
      `${theme.primary}, ${theme.primary}, ${theme.accent}, ${theme.accent}`}
  );
  filter: brightness(70%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  padding: 0 15px;
  background-size: cover;
  width: max-content;
`;

const Over = styled.div`
  background: linear-gradient(
    0.1turn,
    ${({ theme }) =>
      `${theme.primary}, ${theme.primary}, ${theme.accent}, ${theme.accent}`}
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  position: absolute;
  top: -6px;
  left: -6px;
  padding: 0 15px;
  background-size: cover;
`;
