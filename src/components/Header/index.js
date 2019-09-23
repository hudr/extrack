import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Creators as AuthActions } from '../../store/ducks/auth'

import '../../../src/App.css'

import {
  StyledContainer,
  Title,
  Subtitle,
  Img,
  TextContainer,
  HeaderContainer,
  ImageContainer
} from './styled'

class Header extends Component {
  async componentDidMount() {
    this.props.handleUserInfo()
  }
  render() {
    const { authUser } = this.props

    return (
      <StyledContainer>
        <HeaderContainer>
          <TextContainer>
            <Title>Hi, {authUser.userName ? authUser.userName : 'User'}!</Title>
            <Subtitle>How are you today?</Subtitle>
          </TextContainer>
          <ImageContainer>
            <Img
              src='https://neo-labor.com/wp-content/uploads/2016/08/13.jpg'
              alt='Avatar'
              onClick={() => console.log('Photo Click')}
            />
          </ImageContainer>
        </HeaderContainer>
      </StyledContainer>
    )
  }
}

const mapStateToProps = states => ({
  isLogged: states.auth.isLogged,
  authUser: states.auth.authUser
})

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
