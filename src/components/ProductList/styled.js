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

export const Form = styled.form`
  width: 70%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`

export const ProfileInfo = styled.input`
  margin-top: 10px;
  border-radius: 4px;
  font-size: 16px;
  text-align: center;
  color: ${INPUT_TEXT_COLOR};
  padding: 15px 15px 15px 15px;
  border: none;
  background-color: rgba(255, 255, 255, 1);

  ::placeholder {
    color: ${INPUT_TEXT_COLOR};
  }

  :disabled {
    background-color: rgba(255, 255, 255, 0.4);
  }
`

export const DateLabel = styled.p`
  margin-top: 20px;
  font-size: 13px;
  text-align: center;
  color: ${INPUT_TEXT_COLOR};
`

export const BrithInfo = styled.input`
  margin-top: 10px;
  border-radius: 4px;
  font-size: 16px;
  width: 300px;
  text-align: center;
  color: ${INPUT_TEXT_COLOR};
  padding: 15px 15px 15px 70px;
  border: none;
  background-color: rgba(255, 255, 255, 1);

  ::placeholder {
    color: ${INPUT_TEXT_COLOR};
  }

  :disabled {
    background-color: rgba(255, 255, 255, 0.4);
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

export const RegisterProduct = styled.button`
  margin-top: 20px;
  border: 0;
  border-radius: 5px;
  height: 40px;
  background: #4776e6;
  cursor: pointer;
  transition: 0.3s;

  font-size: 13px;
  color: #fff;

  :hover {
    background: #3967d4;
  }
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
