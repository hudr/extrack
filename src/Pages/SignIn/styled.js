import styled from 'styled-components'

import {
  INPUT_TEXT_PLACEHOLDER_COLOR,
  INPUT_TEXT_COLOR,
  BORDER_BOTTOM_INPUT_COLOR,
  FORGOT_LINK_COLOR,
  CREATE_ACCOUNT_COLOR
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
  margin-bottom: 20px;
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

export const LoginButton = styled.button`
  margin-top: 15px;
  border: 0;
  border-radius: 5px;
  height: 48px;
  background: #4776e6;
  cursor: pointer;
  transition: 0.3s;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    font-size: 16px;
    color: #fff;
    text-decoration: none;
  }

  :hover {
    background: #3967d4;
  }
`

export const ForgotLink = styled.div`
  margin-top: 15px;
  font-size: 13px;
  font-weight: 600;
  align-self: center;

  a {
    text-decoration: none;
    color: ${FORGOT_LINK_COLOR};
  }
`

export const CreateAccount = styled.div`
  margin-top: 35px;
  display: flex;
  height: 100%;
  justify-content: space-around;
  align-items: center;
`

export const CreateAccountText = styled.p`
  max-width: 100%;
  color: ${CREATE_ACCOUNT_COLOR};
  font-weight: bold;
  font-size: 14px;
`

export const CreateAccountButton = styled.button`
  border: 0;
  border-radius: 5px;
  width: 80px;
  height: 30px;

  background: #ab1dfc;

  cursor: pointer;
  transition: 0.3s;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    font-size: 12px;
    color: #fff;
    text-decoration: none;
  }

  :hover {
    background: #9e1ee7;
  }
`
