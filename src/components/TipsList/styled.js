import styled from 'styled-components'

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 50px auto;

  @media screen and (min-width: 320px) and (max-width: 767px) {
    margin-top: 35px;
    width: 80%;
  }
`

export const CardContainer = styled.div`
  @media screen and (min-width: 320px) and (max-width: 767px) {
    width: 90%;
  }
`

export const CardDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

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
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const CardStore = styled.h2`
  font-size: 20px;
  font-weight: 900;
  color: #3967d4;
  margin-bottom: 3px;
`

export const CardProduct = styled.h2`
  font-size: 16px;
  font-style: italic;
  text-align: center;
  font-weight: 400;
`

export const CardPrice = styled.p`
  font-size: 15px;
  margin-top: 10px;
  margin-bottom: 10px;
  font-style: italic;
  color: grey;
`

export const CardActions = styled.div`
  display: flex;
  justify-content: space-around;
  width: 150px;
`

export const CardLink = styled.a`
  background-color: #3967d4;
  font-size: 14px;
  border-radius: 4px;
  text-decoration: none;
  padding: 6px 15px 6px 15px;
  color: white;
`

export const CardButton = styled.button`
  border: 0;
  background-color: #b45642;
  font-size: 14px;
  border-radius: 4px;
  padding: 6px;
  text-decoration: none;
  color: white;
`
