import styled, { keyframes } from 'styled-components'

export const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const dots = keyframes`
  0%, 20% {
    color: rgba(0,0,0,0);
    text-shadow:
      .25em 0 0 rgba(0,0,0,0),
      .5em 0 0 rgba(0,0,0,0);
  }
  40% {
    color: #3967d4;
    text-shadow:
      .25em 0 0 rgba(0,0,0,0),
      .5em 0 0 rgba(0,0,0,0);
  }
  60% {
    text-shadow:
      .25em 0 0 #3967d4,
      .5em 0 0 rgba(0,0,0,0);
  }
  80%, 100% {
    text-shadow:
      .25em 0 0 #3967d4,
      .5em 0 0 #3967d4;
  }
`

export const Title = styled.h1`
  font-size: 25px;
  color: #3967d4;
  margin-top: 20%;

  :after {
    content: ' .';
    animation: ${dots} 1s steps(5, end) infinite;
  }
`
