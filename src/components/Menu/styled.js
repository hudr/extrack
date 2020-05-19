import styled from 'styled-components'

export const StyledContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
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
  display: block;
  transition: all 500ms ease;

  margin-bottom: -1px;

  @media screen and (min-width: 320px) and (max-width: 767px) {
    margin-right: 30px;
  }
`

export const MenuLink = styled.div`
  color: grey;
  font-weight: bold;
  text-decoration: none;
  padding-bottom: 9px;
  border: 0;

  cursor: pointer;

  a {
    color: grey;
    text-decoration: none;
  }

  a.current {
    color: #3967d4;
    border-bottom: 3px solid #3967d4;
    padding-bottom: 9px;
  }
`
