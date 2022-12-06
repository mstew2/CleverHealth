import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import HomeIcon from '../assets/home.svg';
import TerminalTitleBar from './TerminalTitleBar';
import { StyledTerminal } from './style';

const StyledUnauthenticatedUser = styled.div``;

const UnauthenticatedUser = () => {
  return (
    <StyledUnauthenticatedUser>
      <p className="pageTitle"> Login to Continue</p>
      <StyledTerminal>
        <TerminalTitleBar />
        <div className="content">
          <pre>
            You tried to access a page you did not have prior authorization for. Please go back to login.
          </pre>
        </div>
      </StyledTerminal>
      <Card img={HomeIcon} txt={'Return To Login'} color={'white'} href={'/'} />
    </StyledUnauthenticatedUser>
  );
};

export default UnauthenticatedUser;
