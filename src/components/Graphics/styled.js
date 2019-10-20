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

export const ProductSelect = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  margin-top: 10px;
  border-radius: 4px;
  color: ${INPUT_TEXT_COLOR};
  font-size: 16px;
  padding: 15px 15px 15px 15px;
  font-size: 16px;

  text-align: center;
  text-align-last: center;

  border: none;
  background-color: rgba(255, 255, 255, 1);

  ::placeholder {
    color: ${INPUT_TEXT_COLOR};
  }

  :disabled {
    background-color: rgba(255, 255, 255, 0.4);
  }
`
