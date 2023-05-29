import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
 
    to {
    transform: rotate(360deg);
    }
`;

const LoaderContainer = styled.div`
  padding: 30px;
  border: 6px solid #8f0ce1;
  border-bottom-color: transparent;
  border-radius: 50%;
  animation: ${rotate} 1s infinite linear;
  height: 0;
  width: 0;
  position: absolute;
  left: 48%;
  top: 30%;
  transform: translate(-47%, 0);
`;

const Loader = () => {
  return (
    <div>
      <LoaderContainer />
    </div>
  );
};

export default Loader;
