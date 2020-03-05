import React, { Fragment, useState, useEffect } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { Link } from 'react-router-dom'
import { Categories } from '../../utils/Mocks/Categories'
import { filterUserProducts } from '../../utils/Convertion'
import '../../../src/App.css'
import {
  StyledContainer,
  CardContainer,
  CardDiv,
  CardContent,
  CardImg,
  CardTitle,
  CardDescription,
} from './styled'

export default function CategoryCards({ category }) {
  //Getting redux states
  const { userUid, userCity, userGenre, userEarnClass, products } = useSelector(
    state => ({
      userUid: state.auth.authUser.userUid,
      userCity: state.auth.authUser.userCity,
      userGenre: state.auth.authUser.userGenre,
      userEarnClass: state.auth.authUser.userEarnClass,
      products: state.product.products,
    }),
    shallowEqual,
  )

  const [userProducts, setUserProducts] = useState({})

  const userHasProducts = products.filter(
    product => product.userUid === userUid,
  )

  useEffect(() => {
    async function getUserProducts() {
      if (
        userHasProducts.length > 0 &&
        userCity &&
        userGenre &&
        userEarnClass
      ) {
        const filterProductsForUser = await filterUserProducts(
          products,
          userUid,
        )
        setUserProducts(filterProductsForUser)
      }
    }
    getUserProducts()
  }, [
    userHasProducts.length,
    userCity,
    userGenre,
    userEarnClass,
    products,
    userUid,
  ])

  return (
    <StyledContainer>
      <CardContainer>
        {Categories.map((category, index) => (
          <Fragment key={category.id}>
            <Link to={`/categories/${category.title.toLocaleLowerCase()}`}>
              <CardDiv>
                <CardContent>
                  <CardImg src={category.imgURL} alt={category.altText} />
                  <CardTitle>{category.title}</CardTitle>
                  <CardDescription>
                    {userProducts && userProducts.products === undefined
                      ? '0'
                      : userProducts.products.totalProductsFromCategory[
                          index
                        ]}{' '}
                    item(s)
                  </CardDescription>
                </CardContent>
              </CardDiv>
            </Link>
          </Fragment>
        ))}
      </CardContainer>
    </StyledContainer>
  )
}
