import React, { useState } from 'react';
import styled from 'styled-components';
import { Search } from 'react-feather';

const SearchBar = () => {
  const [term, setTerm] = useState('');
  const submit = e => {
    e.preventDefault();
    window.location.href = `https://www.google.com/search?q=${term}`;
  };
  return (
    <Form onSubmit={submit}>
      <SearchIcon color="white" />
      <Input value={term} onChange={e => setTerm(e.target.value)}></Input>
    </Form>
  );
};

export default SearchBar;

const Form = styled.form`
  max-width: 1000px;
  width: 100%;
  display: flex;
  justify-self: center;
  grid-area: search;
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  display: flex;
  padding: 10px 10px 10px 40px;
  font-size: 20px;
  border-radius: 8px;
  color: white;
  background: #222;
  border: none;
`;

const SearchIcon = styled(Search)`
  position: absolute;
  top: 8px;
  left: 8px;
  pointer-events: none;
`;
