import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Creators as AuthActions } from '../../store/ducks/auth'

import {
  StyledContainer,
  HeaderContainer,
  UnorderedList,
  List,
  MenuLink
} from './styled'

class Menu extends Component {
  handleSignOut = async () => {
    const { handleLogout } = this.props
    await handleLogout()

    const { isLogged } = this.props
    if (isLogged === false) return this.props.history.push('/')
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

const mapStateToProps = state => ({
  isLogged: state.auth.isLogged
})

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Menu))
