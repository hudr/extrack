import styled, { keyframes } from 'styled-components'

export const StyledContainer = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  background-color: #3967d4;
`

const dots = keyframes`
  0%, 20% {
    color: rgba(0,0,0,0);
    text-shadow:
      .25em 0 0 rgba(0,0,0,0),
      .5em 0 0 rgba(0,0,0,0);
  }
  40% {
    color: white;
    text-shadow:
      .25em 0 0 rgba(0,0,0,0),
      .5em 0 0 rgba(0,0,0,0);
  }
  60% {
    text-shadow:
      .25em 0 0 white,
      .5em 0 0 rgba(0,0,0,0);
  }
  80%, 100% {
    text-shadow:
      .25em 0 0 white,
      .5em 0 0 white;
  }
`

export const Title = styled.h1`
  top: calc(50vh - 20px);
  left: calc(40vw - 20px);
  position: absolute;
  font-size: 24px;
  color: white;

  :after {
    content: ' .';
    animation: ${dots} 1s steps(5, end) infinite;
  }
`
