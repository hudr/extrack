import styled from 'styled-components'

import { INPUT_TEXT_COLOR } from '../../utils/Constants'

export const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h3`
  color: ${INPUT_TEXT_COLOR};
  text-align: center;
  max-width: 250px;
  margin-top: 45px;
  font-style: italic;
`

export const GoToProfile = styled.button`
  margin-top: 20px;
  border: 0;
  border-radius: 5px;
  height: 40px;
  width: 50%;
  background: #4776e6;
  cursor: pointer;
  transition: 0.3s;

  font-size: 13px;

  a {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    color: #fff;
    text-decoration: none;
  }

  :hover {
    background: #3967d4;
  }
`
