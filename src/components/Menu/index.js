import React, { Component } from 'react'

import '../../../src/App.css'

import {
  StyledContainer,
  HeaderContainer,
  UnorderedList,
  List,
  MenuLink
} from './styled'

export default class Menu extends Component {
  render() {
    return (
      <StyledContainer>
        <HeaderContainer>
          <UnorderedList>
            <List>
              <MenuLink href='#'>News</MenuLink>
            </List>
            <List>
              <MenuLink href='#'>Create</MenuLink>
            </List>
            <List>
              <MenuLink href='#'>Expenses</MenuLink>
            </List>
            <List>
              <MenuLink href='#'>Graphics</MenuLink>
            </List>
            <List>
              <MenuLink href='#'>Tips</MenuLink>
            </List>
            <List>
              <MenuLink href='#'>Profile</MenuLink>
            </List>
            <List>
              <MenuLink href='#'>Logout</MenuLink>
            </List>
          </UnorderedList>
        </HeaderContainer>
      </StyledContainer>
    )
  }
}
