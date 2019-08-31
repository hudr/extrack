import styled from 'styled-components'

export const StyledContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
`

export const HeaderContainer = styled.div`
  display: inline-block;
  overflow: scroll;
  flex-direction: column;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  width: 70%;

  ::-webkit-scrollbar {
    display: none;
  }
`

export const UnorderedList = styled.ul`
  display: flex;

  justify-content: space-around;
  margin: 0px 35px 0px 35px;

  @media screen and (min-width: 320px) and (max-width: 767px) {
    justify-content: flex-start;
    margin: 0;
  }
`

export const List = styled.li`
  list-style: none;

  padding-bottom: 10px;
  display: block;

  transition: all 500ms ease;

  @media screen and (min-width: 320px) and (max-width: 767px) {
    margin-right: 30px;
  }
`

export const MenuLink = styled.a`
  font-weight: bold;
  color: grey;
  text-decoration: none;
  padding-bottom: 8px;
  border: 0;
  border-bottom: 2px solid transparent;

  width: 200px;

  transition: all 500ms ease;

  :focus {
    color: #3967d4;
    border-bottom: 2px solid #3967d4;
    transition: all 2s ease;
  }
`
