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
  font-weight: bold;
  margin-top: 35px;
  margin-bottom: 20px;
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

export const CardContainer = styled.div`
  a {
    text-decoration: none;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    align-items: center;
    margin: 0 auto;
  }

  @media screen and (min-width: 320px) and (max-width: 767px) {
    width: 90%;
  }
`

export const CardDiv = styled.div`
  display: flex;
  justify-content: center;

  flex-direction: column;

  width: 850px;
  height: 80px;
  background: white;
  border-radius: 8px;
  margin-right: 15px;
  margin-bottom: 15px;
  -webkit-box-shadow: 26px 3px 44px -42px rgba(0, 0, 0, 0.48);
  -moz-box-shadow: 26px 3px 44px -42px rgba(0, 0, 0, 0.48);
  box-shadow: 26px 3px 44px -42px rgba(0, 0, 0, 0.48);

  @media screen and (min-width: 320px) and (max-width: 767px) {
    width: 100%;
    margin-right: 0;
  }
`

export const CardContent = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
`

export const CardTitle = styled.h2`
  font-size: 18px;
  font-weight: 900;
  color: #3967d4;
`

export const CardDescription = styled.p`
  font-size: 13px;
  font-style: italic;
  color: grey;
`
