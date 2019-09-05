import styled from 'styled-components'

import {
  INPUT_TEXT_PLACEHOLDER_COLOR,
  INPUT_TEXT_COLOR,
  BORDER_BOTTOM_INPUT_COLOR,
  FORGOT_LINK_COLOR
} from '../../utils/Constants'

export const StyledContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Form = styled.form`
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
`

export const Img = styled.img`
  width: 200px;
  margin: 0 auto;
  align-self: center;
  margin-bottom: 10px;
`

export const Input = styled.input`
  margin-top: 10px;
  border-radius: 4px;
  height: 48px;
  font-size: 16px;
  text-align: center;
  color: ${INPUT_TEXT_COLOR};
  background: white;
  border: none;

  transition: 0.8s ease-in-out;

  border-bottom: ${BORDER_BOTTOM_INPUT_COLOR} 1px solid;

  :focus {
    background-color: rgba(0, 0, 0, 0.01);
    border-color: #4776e6;
  }

  ::placeholder {
    color: ${INPUT_TEXT_PLACEHOLDER_COLOR};
  }
`

export const RecoveryButton = styled.button`
  margin-top: 15px;
  border: 0;
  border-radius: 5px;
  height: 48px;
  font-size: 16px;
  background: #4776e6;
  color: #fff;
  cursor: pointer;
  transition: 0.3s;

  :hover {
    background: #3967d4;
  }
`

export const BackToHome = styled.div`
  margin-top: 15px;
  font-size: 13px;
  font-weight: 600;
  align-self: center;

  a {
    text-decoration: none;
    color: ${FORGOT_LINK_COLOR};
  }
`

export const ErrorMessage = styled.div`
  width: 100%;
  padding: 10px;
  text-align: center;
  border-radius: 5px;
  font-size: 13px;
  background-color: rgba(255, 0, 0, 0.6);
  color: white;
`
