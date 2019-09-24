import React, { Component } from 'react'

import { connect } from 'react-redux'

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
    const { authUser } = this.props

    return (
      <StyledContainer>
        <HeaderContainer>
          <TextContainer>
            <Title>Hi, {authUser.userName}!</Title>
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
  authUser: states.auth.authUser
})

export default connect(
  mapStateToProps,
  null
)(Header)
