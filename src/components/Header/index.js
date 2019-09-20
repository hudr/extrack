import React, { Component } from 'react'

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

export default class Header extends Component {
  render() {
    return (
      <StyledContainer>
        <HeaderContainer>
          <TextContainer>
            <Title>Hi, {this.props.name ? this.props.name : 'User' }!</Title>
            <Subtitle>How are you today?</Subtitle>
          </TextContainer>
          <ImageContainer>
            <Img
              src='https://neo-labor.com/wp-content/uploads/2016/08/13.jpg'
              alt='Avatar'
              onClick={() => console.log('Photo click')}
            />
          </ImageContainer>
        </HeaderContainer>
      </StyledContainer>
    )
  }
}
