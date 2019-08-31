import React, { Fragment, Component } from 'react'

import { Categories } from '../../utils/Mocks/Categories'

import '../../../src/App.css'

import {
  StyledContainer,
  CardContainer,
  CardDiv,
  CardImg,
  CardTitle,
  CardDescription
} from './styled'

export default class CategoryCards extends Component {
  render() {
    console.log('Mocked Categories', Categories)
    return (
      <StyledContainer>
        <CardContainer>
          {Categories.map(category => (
            <Fragment key={category.id}>
              <CardDiv>
                <CardImg src={category.imgURL} alt={category.altText} />
                <CardTitle>{category.title}</CardTitle>
                <CardDescription>
                  {category.numberOfItems} item(s)
                </CardDescription>
              </CardDiv>
            </Fragment>
          ))}
        </CardContainer>
      </StyledContainer>
    )
  }
}
