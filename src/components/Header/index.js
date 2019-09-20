import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { login } from '../../store/ducks/users'

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
  render() {
    const { login, user } = this.props
    console.log('user', user)
    return (
      <StyledContainer>
        <HeaderContainer>
          <TextContainer>
            <Title>
              Hi, {this.props.user.username ? this.props.user.username : 'User'}
              !
            </Title>
            <Subtitle>How are you today?</Subtitle>
          </TextContainer>
          <ImageContainer>
            <Img
              src='https://neo-labor.com/wp-content/uploads/2016/08/13.jpg'
              alt='Avatar'
              onClick={() => login()}
            />
          </ImageContainer>
        </HeaderContainer>
      </StyledContainer>
    )
  }
}

const mapStateToProps = state => ({
  isLogged: state.users.isLogged,
  user: state.users.user
})

const mapDispatchToProps = dispatch => bindActionCreators({ login }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
