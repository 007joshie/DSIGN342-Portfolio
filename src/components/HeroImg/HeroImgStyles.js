import styled, { keyframes } from "styled-components";

const shadowTransition = keyframes`
  from {
      box-shadow: 0 ;
    }

   to {
    box-shadow: 0 ;
    } 

  
   
`;

export const AvatarContainer = styled.div`
  position: relative;
  height: 500px;
  width: 500px;
  transform: scale(0.8);

  animation: ${shadowTransition} 2s alternate infinite;

  img {
    position: absolute;
    top: 0;
    right: 0;
    height: 500px;
    width: 500px;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    height: 400px;
    width: 400px;
    top: 50px;
    img {
      height: 400px;
      width: 400px;
    }
  }
  @media only screen and (max-width: 980px) {
    display: none;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
`;
