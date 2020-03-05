import React, { Component, Fragment } from 'react'
import { Link, withRouter } from 'react-router-dom'

import {
  StyledEmptyContainer,
  NotFoundImg,
  Subtitle,
  BackToHomeButton
} from './styled'

import notFoundImage from '../../assets/images/not-found.svg'

class NotFound extends Component {
  render() {
    return (
      <Fragment>
        <StyledEmptyContainer>
          <NotFoundImg src={notFoundImage} alt='emptyimage' />
          <Subtitle>Oops! The page you're looking for doesn't exist!</Subtitle>
          <Link to='/'>
            <BackToHomeButton type='button'>Back to home</BackToHomeButton>
          </Link>
        </StyledEmptyContainer>
      </Fragment>
    )
  }
}

export default withRouter(NotFound)
