import styled from 'styled-components'

export const StyledContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 50px auto;

  @media screen and (min-width: 320px) and (max-width: 767px) {
    margin-top: 35px;
  }
`

export const CardContainer = styled.div`
  width: 75%;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  margin: 0 auto;

  @media screen and (min-width: 320px) and (max-width: 767px) {
    justify-content: space-between;
    width: 90%;
    margin: 0;
  }
`

export const CardDiv = styled.div`
  width: 120px;
  height: 150px;
  background: white;
  border-radius: 8px;
  margin-right: 15px;
  margin-bottom: 15px;
  -webkit-box-shadow: 26px 3px 44px -42px rgba(0, 0, 0, 0.48);
  -moz-box-shadow: 26px 3px 44px -42px rgba(0, 0, 0, 0.48);
  box-shadow: 26px 3px 44px -42px rgba(0, 0, 0, 0.48);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 320px) and (max-width: 767px) {
    margin: 0;
    margin-bottom: 20px;
  }
`

export const CardImg = styled.img`
  width: 40px;
  margin-bottom: 10px;
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
