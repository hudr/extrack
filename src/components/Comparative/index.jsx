import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Creators as ProductActions } from '../../store/ducks/product'

import {
  StyledContainer,
  Title,
  GoToProfile,
  CardContainer,
  CardDiv,
  TitleDiv,
  CardTitle,
  InfoTitle,
  CardContent,
  InfoDiv,
  InfoBox,
  InfoContent,
  FooterDiv,
  FooterTitle,
  InfoFooter
} from './styled'

import {
  filterUserProducts,
  filterAllUserProducts
} from '../../utils/Convertion'

class Comparative extends Component {
  state = {
    userDataInfos: {
      products: {
        userProductsFromCategory: [],
        totalValueFromCategory: [],
        totalMediaFromCategory: []
      },
      categories: [],
      totalProducts: 0,
      totalValueFromAllProducts: 0
    },

    allDataInfos: {
      products: {
        allProductsFromCategory: [],
        allTotalValueFromCategory: [],
        allTotalMediaFromCategory: []
      },
      allCategories: [],
      allTotalProducts: 0,
      allTotalValueFromAllProducts: 0
    },
    hasProducts: false
  }

  async componentDidMount() {
    const {
      authUser: { userUid, userCity, userGenre, userEarnClass }
    } = this.props

    const { products } = this.props

    const userHasProducts = products.filter(
      product => product.userUid === userUid
    )

    if (userHasProducts.length > 0 && userCity && userGenre && userEarnClass) {
      const filterProductsForUser = await filterUserProducts(products, userUid)
      const filterAllProducts = await filterAllUserProducts(
        products,
        userUid,
        userCity,
        userGenre,
        userEarnClass
      )

      this.setState({
        userDataInfos: filterProductsForUser,
        allDataInfos: filterAllProducts,
        hasProducts: true
      })
    } else {
      this.setState({
        hasProducts: false
      })
    }
  }

  render() {
    const {
      userDataInfos: {
        products: {
          totalProductsFromCategory = [],
          totalValueFromCategory,
          totalMediaFromCategory
        },
        categories,
        totalProducts,
        totalValueFromAllProducts
      },

      allDataInfos: {
        products: { allTotalMediaFromCategory }
      },
      hasProducts
    } = this.state
    const {
      authUser: { userGenre, userEarnClass }
    } = this.props

    return (
      <StyledContainer>
        {!userGenre && !userEarnClass ? (
          <Fragment>
            <Title>
              You can't see comparative yet. Please complete your profile.
            </Title>
            <GoToProfile>
              <Link to='/profile'>Go to profile</Link>
            </GoToProfile>
          </Fragment>
        ) : hasProducts ? (
          <Fragment>
            <h5 style={{ marginTop: '20px', marginBottom: '20px' }}>
              Total Products: {totalProducts} | Total R$
              {totalValueFromAllProducts}
            </h5>
            {categories.map((category, index) => (
              <CardContainer key={index}>
                <CardDiv>
                  <TitleDiv>
                    <CardTitle>
                      <InfoTitle>Category: {category}</InfoTitle>
                      <InfoTitle>
                        Products: {totalProductsFromCategory[index]}
                      </InfoTitle>
                    </CardTitle>
                  </TitleDiv>
                  <CardContent>
                    <InfoDiv>
                      {totalProductsFromCategory[index] === 0 ? (
                        <InfoContent>
                          <InfoBox fontSize='13px'>
                            You need insert products in this category
                          </InfoBox>
                        </InfoContent>
                      ) : (
                        <InfoContent>
                          <InfoBox>R${totalMediaFromCategory[index]}</InfoBox>
                          <InfoBox fontSize='12px'>your media</InfoBox>
                        </InfoContent>
                      )}

                      {allTotalMediaFromCategory[index] === 'NaN' ? (
                        <InfoContent>
                          <InfoBox fontSize='13px'>
                            There's no data matching with your profile
                          </InfoBox>
                        </InfoContent>
                      ) : (
                        <InfoContent>
                          <InfoBox>
                            R$
                            {allTotalMediaFromCategory[index]}
                          </InfoBox>
                          <InfoBox fontSize='12px'>others media</InfoBox>
                        </InfoContent>
                      )}
                    </InfoDiv>
                  </CardContent>
                  <FooterDiv>
                    <FooterTitle>
                      <InfoFooter>
                        Your amount R${totalValueFromCategory[index]}
                      </InfoFooter>
                    </FooterTitle>
                  </FooterDiv>
                </CardDiv>
              </CardContainer>
            ))}
          </Fragment>
        ) : (
          <Fragment>
            <Title>
              You can't see comparative yet. Please register any product.
            </Title>
            <GoToProfile>
              <Link to='/create'>Add your first product</Link>
            </GoToProfile>
          </Fragment>
        )}
      </StyledContainer>
    )
  }
}

const mapStateToProps = state => ({
  authUser: state.auth.authUser,
  products: state.product.products
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(ProductActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Comparative)
