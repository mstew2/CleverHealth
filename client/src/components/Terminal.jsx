import React from 'react';
import { StyledTerminal } from './style';
import TerminalTitleBar from './TerminalTitleBar';

const Terminal = () => {
  return (
    <StyledTerminal>
      <TerminalTitleBar />
      <div className="content">
        <pre>
          CleverHealth
        </pre>
        <pre>Developed using React, Node, Express, MongoDB </pre>
        <br />
      </div>
    </StyledTerminal>
  );
};

export default Terminal;
