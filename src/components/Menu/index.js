import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import firebase from '../../config/Firebase'

import '../../../src/App.css'

import {
  StyledContainer,
  HeaderContainer,
  UnorderedList,
  List,
  MenuLink
} from './styled'

class Menu extends Component {
  handleSignOut = async () => {
    try {
      await firebase.auth().signOut()
      this.props.history.push('/')
    } catch (error) {
      console.log(error)
    }
  }

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
              <MenuLink onClick={this.handleSignOut}>Logout</MenuLink>
            </List>
          </UnorderedList>
        </HeaderContainer>
      </StyledContainer>
    )
  }
}

export default withRouter(Menu)
