import React, { Component } from 'react'

import { StyledContainer, Title } from './styled'

export default class Loader extends Component {
  render() {
    return (
      <StyledContainer>
        <Title>Loading</Title>
      </StyledContainer>
    )
  }
}
