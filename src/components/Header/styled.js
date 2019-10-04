import styled from 'styled-components'

export const StyledContainer = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`

export const HeaderContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
`

export const TextContainer = styled.div``

export const ImageContainer = styled.div``

export const Title = styled.h1`
  font-size: 24px;
  color: #404040;
`

export const Subtitle = styled.p`
  font-size: 12px;
  color: grey;
`

export const Img = styled.img`
  border-radius: 50%;
  width: 40px;
`

export const Dropdown = styled.div`
  display: ${props => (props.isVisible ? 'block' : 'none')};
  position: absolute;
  background-color: #f9f9f9;
  min-width: 110px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);

  a {
    float: none;
    color: #404040;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
  }

  a:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`

export const Arrow = styled.i`
  margin-left: 12px;
  vertical-align: 15px;
  cursor: pointer;
  border: solid #404040;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
`

export const Logout = styled.a`
  cursor: pointer;
  float: none;
  color: #404040;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
`
