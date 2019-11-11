import styled, { keyframes } from 'styled-components'

export const StyledContainer = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  background-color: #3967d4;
`

const scaleout = keyframes`
    0% { 
      -webkit-transform: scale(0);
      transform: scale(0);
    } 100% {
      -webkit-transform: scale(1.0);
      transform: scale(1.0);
      opacity: 0;
    }
`

export const Spinner = styled.div`
  top: calc(50vh - 20px);
  left: calc(50vw - 20px);
  position: absolute;
  width: 35px;
  height: 35px;
  background-color: white;
  border-radius: 100%;
  -webkit-animation: ${scaleout} 1s infinite ease-in-out;
  animation: ${scaleout} 1s infinite ease-in-out;
`
