import styled from 'styled-components'

export const StyledEmptyContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const NotFoundImg = styled.img`
  width: 40vh;
  height: 40vh;
`

export const Subtitle = styled.h5`
  color: grey;
  font-size: 3vh;
  max-width: 40vh;
  text-align: center;
`

export const BackToHomeButton = styled.button`
  margin-top: 20px;
  border: 0;
  border-radius: 5px;
  height: 40px;
  width: 250px;
  background: #4776e6;
  cursor: pointer;
  transition: 0.3s;

  font-size: 13px;
  color: #fff;

  :hover {
    background: #3967d4;
  }
`
