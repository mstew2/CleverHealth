import React from 'react';
import Terminal from '../../components/Terminal';
import CardList from '../../components/CardList';
import styled from 'styled-components';

const StyledHome = styled.div`
  width: 50%;
  margin: 0 auto;
  text-align: center;

  .pageTitle {
    font-weight: 400;
    font-size: 35px;
  }
`;

const Home = () => {
  return (
    <StyledHome>
      <p className="pageTitle">Login</p>
      <Terminal />
      <CardList />
    </StyledHome>
  );
};
export default Home;
