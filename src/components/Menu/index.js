import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

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
              <MenuLink>
                <NavLink activeClassName='current' to='/create'>
                  Create
                </NavLink>
              </MenuLink>
            </List>
            <List>
              <MenuLink>
                <NavLink activeClassName='current' to='/home'>
                  Categories
                </NavLink>
              </MenuLink>
            </List>
            <List>
              <MenuLink>
                <NavLink activeClassName='current' to='/graphics'>
                  Graphics
                </NavLink>
              </MenuLink>
            </List>
            <List>
              <MenuLink>
                <NavLink activeClassName='current' to='/tips'>
                  Tips
                </NavLink>
              </MenuLink>
            </List>
            <List>
              <MenuLink>
                <NavLink activeClassName='current' exact={true} to='/'>
                  Logout
                </NavLink>
              </MenuLink>
            </List>
          </UnorderedList>
        </HeaderContainer>
      </StyledContainer>
    )
  }
}
