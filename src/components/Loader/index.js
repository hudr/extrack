import React, { Component } from 'react'

import { StyledContainer, Spinner } from './styled'

export default class Loader extends Component {
  render() {
    return (
      <StyledContainer>
        <Spinner />
      </StyledContainer>
    )
  }
}
