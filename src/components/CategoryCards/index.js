import React, { Fragment, Component } from 'react'

import { Categories } from '../../utils/Mocks/Categories'

import '../../../src/App.css'

import {
  StyledContainer,
  CardContainer,
  CardDiv,
  CardContent,
  CardImg,
  CardTitle,
  CardDescription
} from './styled'

export default class CategoryCards extends Component {
  render() {
    return (
      <StyledContainer>
        <CardContainer>
          {Categories.map(category => (
            <Fragment key={category.id}>
              <CardDiv>
                <CardContent>
                  <CardImg src={category.imgURL} alt={category.altText} />
                  <CardTitle>{category.title}</CardTitle>
                  <CardDescription>
                    {category.numberOfItems} item(s)
                  </CardDescription>
                </CardContent>
              </CardDiv>
            </Fragment>
          ))}
        </CardContainer>
      </StyledContainer>
    )
  }
}
