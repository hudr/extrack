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

class Graphics extends Component {
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
      getProducts,
      authUser: { userUid, userGenre, userBirthDate }
    } = this.props

    await getProducts()

    const { products } = this.props

    const userHasProducts = products.filter(
      product => product.userUid === userUid
    )

    if (userHasProducts.length > 0 && userGenre && userBirthDate) {
      const filterProductsForUser = await filterUserProducts(products, userUid)
      const filterAllProducts = await filterAllUserProducts(
        products,
        userUid,
        userGenre,
        userBirthDate
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
      authUser: { userGenre, userBirthDate }
    } = this.props

    return (
      <StyledContainer>
        {!userGenre && !userBirthDate ? (
          <Fragment>
            <Title>
              You can't see graphics yet. Please complete your profile.
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
            {/* FOOD */}
            <CardContainer>
              <CardDiv>
                <TitleDiv>
                  <CardTitle>
                    <InfoTitle>Category: {categories[0]}</InfoTitle>
                    <InfoTitle>
                      Products: {totalProductsFromCategory[0]}
                    </InfoTitle>
                  </CardTitle>
                </TitleDiv>
                <CardContent>
                  <InfoDiv>
                    {totalProductsFromCategory[0] === 0 ? (
                      <InfoContent>
                        <InfoBox fontSize='13px'>
                          You need insert products in this category
                        </InfoBox>
                      </InfoContent>
                    ) : (
                      <InfoContent>
                        <InfoBox>R${totalMediaFromCategory[0]}</InfoBox>
                        <InfoBox fontSize='12px'>your media</InfoBox>
                      </InfoContent>
                    )}

                    {allTotalMediaFromCategory[0] === 'NaN' ? (
                      <InfoContent>
                        <InfoBox fontSize='13px'>
                          There's no data matching with your profile
                        </InfoBox>
                      </InfoContent>
                    ) : (
                      <InfoContent>
                        <InfoBox>
                          R$
                          {allTotalMediaFromCategory[0]}
                        </InfoBox>
                        <InfoBox fontSize='12px'>others media</InfoBox>
                      </InfoContent>
                    )}
                  </InfoDiv>
                </CardContent>
                <FooterDiv>
                  <FooterTitle>
                    <InfoFooter>
                      Your amount R${totalValueFromCategory[0]}
                    </InfoFooter>
                  </FooterTitle>
                </FooterDiv>
              </CardDiv>
            </CardContainer>

            {/* HOUSE */}
            <CardContainer>
              <CardDiv>
                <TitleDiv>
                  <CardTitle>
                    <InfoTitle>Category: {categories[1]}</InfoTitle>
                    <InfoTitle>
                      Products: {totalProductsFromCategory[1]}
                    </InfoTitle>
                  </CardTitle>
                </TitleDiv>
                <CardContent>
                  <InfoDiv>
                    {totalProductsFromCategory[1] === 0 ? (
                      <InfoContent>
                        <InfoBox fontSize='13px'>
                          You need insert products in this category
                        </InfoBox>
                      </InfoContent>
                    ) : (
                      <InfoContent>
                        <InfoBox>R${totalMediaFromCategory[1]}</InfoBox>
                        <InfoBox fontSize='12px'>your media</InfoBox>
                      </InfoContent>
                    )}

                    {allTotalMediaFromCategory[1] === 'NaN' ? (
                      <InfoContent>
                        <InfoBox fontSize='13px'>
                          There's no data matching with your profile
                        </InfoBox>
                      </InfoContent>
                    ) : (
                      <InfoContent>
                        <InfoBox>
                          R$
                          {allTotalMediaFromCategory[1]}
                        </InfoBox>
                        <InfoBox fontSize='12px'>others media</InfoBox>
                      </InfoContent>
                    )}
                  </InfoDiv>
                </CardContent>
                <FooterDiv>
                  <FooterTitle>
                    <InfoFooter>
                      Your amount R${totalValueFromCategory[1]}
                    </InfoFooter>
                  </FooterTitle>
                </FooterDiv>
              </CardDiv>
            </CardContainer>

            {/* VEHICLE */}
            <CardContainer>
              <CardDiv>
                <TitleDiv>
                  <CardTitle>
                    <InfoTitle>Category: {categories[2]}</InfoTitle>
                    <InfoTitle>
                      Products: {totalProductsFromCategory[2]}
                    </InfoTitle>
                  </CardTitle>
                </TitleDiv>
                <CardContent>
                  <InfoDiv>
                    {totalProductsFromCategory[2] === 0 ? (
                      <InfoContent>
                        <InfoBox fontSize='13px'>
                          You need insert products in this category
                        </InfoBox>
                      </InfoContent>
                    ) : (
                      <InfoContent>
                        <InfoBox>R${totalMediaFromCategory[2]}</InfoBox>
                        <InfoBox fontSize='12px'>your media</InfoBox>
                      </InfoContent>
                    )}

                    {allTotalMediaFromCategory[2] === 'NaN' ? (
                      <InfoContent>
                        <InfoBox fontSize='13px'>
                          There's no data matching with your profile
                        </InfoBox>
                      </InfoContent>
                    ) : (
                      <InfoContent>
                        <InfoBox>
                          R$
                          {allTotalMediaFromCategory[2]}
                        </InfoBox>
                        <InfoBox fontSize='12px'>others media</InfoBox>
                      </InfoContent>
                    )}
                  </InfoDiv>
                </CardContent>
                <FooterDiv>
                  <FooterTitle>
                    <InfoFooter>
                      Your amount R${totalValueFromCategory[2]}
                    </InfoFooter>
                  </FooterTitle>
                </FooterDiv>
              </CardDiv>
            </CardContainer>

            {/* HEALTH */}
            <CardContainer>
              <CardDiv>
                <TitleDiv>
                  <CardTitle>
                    <InfoTitle>Category: {categories[3]}</InfoTitle>
                    <InfoTitle>
                      Products: {totalProductsFromCategory[3]}
                    </InfoTitle>
                  </CardTitle>
                </TitleDiv>
                <CardContent>
                  <InfoDiv>
                    {totalProductsFromCategory[3] === 0 ? (
                      <InfoContent>
                        <InfoBox fontSize='13px'>
                          You need insert products in this category
                        </InfoBox>
                      </InfoContent>
                    ) : (
                      <InfoContent>
                        <InfoBox>R${totalMediaFromCategory[3]}</InfoBox>
                        <InfoBox fontSize='12px'>your media</InfoBox>
                      </InfoContent>
                    )}

                    {allTotalMediaFromCategory[3] === 'NaN' ? (
                      <InfoContent>
                        <InfoBox fontSize='13px'>
                          There's no data matching with your profile
                        </InfoBox>
                      </InfoContent>
                    ) : (
                      <InfoContent>
                        <InfoBox>
                          R$
                          {allTotalMediaFromCategory[3]}
                        </InfoBox>
                        <InfoBox fontSize='12px'>others media</InfoBox>
                      </InfoContent>
                    )}
                  </InfoDiv>
                </CardContent>
                <FooterDiv>
                  <FooterTitle>
                    <InfoFooter>
                      Your amount R${totalValueFromCategory[3]}
                    </InfoFooter>
                  </FooterTitle>
                </FooterDiv>
              </CardDiv>
            </CardContainer>

            {/* BEAUTY */}
            <CardContainer>
              <CardDiv>
                <TitleDiv>
                  <CardTitle>
                    <InfoTitle>Category: {categories[4]}</InfoTitle>
                    <InfoTitle>
                      Products: {totalProductsFromCategory[4]}
                    </InfoTitle>
                  </CardTitle>
                </TitleDiv>
                <CardContent>
                  <InfoDiv>
                    {totalProductsFromCategory[4] === 0 ? (
                      <InfoContent>
                        <InfoBox fontSize='13px'>
                          You need insert products in this category
                        </InfoBox>
                      </InfoContent>
                    ) : (
                      <InfoContent>
                        <InfoBox>R${totalMediaFromCategory[4]}</InfoBox>
                        <InfoBox fontSize='12px'>your media</InfoBox>
                      </InfoContent>
                    )}

                    {allTotalMediaFromCategory[4] === 'NaN' ? (
                      <InfoContent>
                        <InfoBox fontSize='13px'>
                          There's no data matching with your profile
                        </InfoBox>
                      </InfoContent>
                    ) : (
                      <InfoContent>
                        <InfoBox>
                          R$
                          {allTotalMediaFromCategory[4]}
                        </InfoBox>
                        <InfoBox fontSize='12px'>others media</InfoBox>
                      </InfoContent>
                    )}
                  </InfoDiv>
                </CardContent>
                <FooterDiv>
                  <FooterTitle>
                    <InfoFooter>
                      Your amount R${totalValueFromCategory[4]}
                    </InfoFooter>
                  </FooterTitle>
                </FooterDiv>
              </CardDiv>
            </CardContainer>

            {/* PERSONAL */}
            <CardContainer>
              <CardDiv>
                <TitleDiv>
                  <CardTitle>
                    <InfoTitle>Category: {categories[5]}</InfoTitle>
                    <InfoTitle>
                      Products: {totalProductsFromCategory[5]}
                    </InfoTitle>
                  </CardTitle>
                </TitleDiv>
                <CardContent>
                  <InfoDiv>
                    {totalProductsFromCategory[5] === 0 ? (
                      <InfoContent>
                        <InfoBox fontSize='13px'>
                          You need insert products in this category
                        </InfoBox>
                      </InfoContent>
                    ) : (
                      <InfoContent>
                        <InfoBox>R${totalMediaFromCategory[5]}</InfoBox>
                        <InfoBox fontSize='12px'>your media</InfoBox>
                      </InfoContent>
                    )}

                    {allTotalMediaFromCategory[5] === 'NaN' ? (
                      <InfoContent>
                        <InfoBox fontSize='13px'>
                          There's no data matching with your profile
                        </InfoBox>
                      </InfoContent>
                    ) : (
                      <InfoContent>
                        <InfoBox>
                          R$
                          {allTotalMediaFromCategory[5]}
                        </InfoBox>
                        <InfoBox fontSize='12px'>others media</InfoBox>
                      </InfoContent>
                    )}
                  </InfoDiv>
                </CardContent>
                <FooterDiv>
                  <FooterTitle>
                    <InfoFooter>
                      Your amount R${totalValueFromCategory[5]}
                    </InfoFooter>
                  </FooterTitle>
                </FooterDiv>
              </CardDiv>
            </CardContainer>
          </Fragment>
        ) : (
          <Fragment>
            <Title>
              You can't see graphics yet. Please register any product.
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Graphics)
