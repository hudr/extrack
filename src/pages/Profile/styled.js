import styled from 'styled-components'

import { INPUT_TEXT_COLOR, FORGOT_LINK_COLOR } from '../../utils/Constants'

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
  width: 13vh;
  height: 13vh;
  margin: 0 auto;
  align-self: center;
  margin-bottom: 20px;
  border-radius: 50%;
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

export const ProfileSelect = styled.select`
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

export const EditProfileButton = styled.button`
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

export const SaveProfileButton = styled.button`
  margin-top: 20px;
  border: 0;
  border-radius: 5px;
  height: 40px;
  background: #007a00;
  cursor: pointer;
  transition: 0.3s;

  font-size: 13px;
  color: #fff;

  :hover {
    background: #00bf00;
  }
`

export const BackToHome = styled.div`
  margin-top: 15px;
  font-size: 15px;
  font-weight: 600;
  align-self: center;

  a {
    text-decoration: none;
    color: ${FORGOT_LINK_COLOR};
  }
`
