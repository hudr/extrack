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

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  margin: 0 auto;
  width: 70%;
`

export const CardDiv = styled.div`
  height: 130px;
  background: white;
  border-radius: 8px;
  margin-right: 15px;
  margin-bottom: 30px;
  -webkit-box-shadow: 26px 3px 44px -42px rgba(0, 0, 0, 0.48);
  -moz-box-shadow: 26px 3px 44px -42px rgba(0, 0, 0, 0.48);
  box-shadow: 26px 3px 44px -42px rgba(0, 0, 0, 0.48);
  width: 100%;
  margin-right: 0;
`
export const TitleDiv = styled.div`
  width: 100%;
  height: 20%;
  background: #4776e6;
  border-radius: 5px 5px 0px 0px;
`

export const CardTitle = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  align-items: center;
  align-content: center;
  justify-content: space-around;
`

export const InfoTitle = styled.h2`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  text-transform: uppercase;
  color: #fff;
`

export const FooterDiv = styled.div`
  width: 100%;
  height: 20%;
  background: #4776e6;
  border-radius: 0px 0px 5px 5px;
`

export const FooterTitle = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
`

export const InfoFooter = styled.h2`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  text-transform: uppercase;
  color: #fff;
`

export const CardContent = styled.div`
  display: flex;
  height: 60%;
  width: 100%;
  align-items: center;
  align-content: center;
`

export const InfoBox = styled.h2`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: space-around;
  max-width: 150px;
  text-align: center;

  font-size: ${props => props.fontSize || '18px'};
`

export const InfoDiv = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  align-content: center;
  justify-content: space-around;
`

export const InfoContent = styled.div`
  height: 100%;
  width: 100%;
  color: grey;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  background-color: rgba(41, 197, 44, 0.2);
`
