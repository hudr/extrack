import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Creators as AuthActions } from '../../store/ducks/auth'

import {
  StyledContainer,
  Title,
  Subtitle,
  Img,
  TextContainer,
  HeaderContainer,
  ImageContainer,
  Arrow,
  Dropdown,
  Logout
} from './styled'

class Header extends Component {
  state = {
    isOpen: false
  }

  handleSignOut = async () => {
    const { handleLogout } = this.props

    await handleLogout()

    const { isLogged } = this.props

    if (isLogged === false) {
      this.props.history.push('/')
    }
  }

  render() {
    const { authUser } = this.props
    const { isOpen } = this.state

    return (
      <StyledContainer>
        <HeaderContainer>
          <TextContainer>
            <Title>Hi, {authUser.userName}!</Title>
            <Subtitle>How are you today?</Subtitle>
          </TextContainer>
          <ImageContainer>
            {authUser.userImageURL && (
              <Img src={`${authUser.userImageURL}`} alt='Avatar' />
            )}

            <Arrow onClick={() => this.setState({ isOpen: !isOpen })} />
            <Dropdown isVisible={isOpen}>
              <Link to='/profile'>Profile</Link>
              <Logout onClick={this.handleSignOut}>Logout</Logout>
            </Dropdown>
          </ImageContainer>
        </HeaderContainer>
      </StyledContainer>
    )
  }
}

const mapStateToProps = state => ({
  authUser: state.auth.authUser
})

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Header))
