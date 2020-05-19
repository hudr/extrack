import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

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
                <NavLink activeClassName='current' to='/categories'>
                  Categories
                </NavLink>
              </MenuLink>
            </List>
            <List>
              <MenuLink>
                <NavLink activeClassName='current' to='/comparative'>
                  Comparative
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
          </UnorderedList>
        </HeaderContainer>
      </StyledContainer>
    )
  }
}
