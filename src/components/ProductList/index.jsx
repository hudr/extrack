import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { Creators as ProductActions } from '../../store/ducks/product'
import LoaderBullets from '../LoaderBullets'
import { alertSuccessMessage } from '../../utils/SweetAlert'

import {
  StyledContainer,
  Title,
  GoToProfile,
  CardContainer,
  CardDiv,
  CardContent,
  CardTitle,
  CardDescription,
} from './styled'

export default function ProductList({ category }) {
  //Getting redux states
  const { isLoading, authUser, products } = useSelector(
    state => ({
      isLoading: state.auth.isLoading,
      authUser: state.auth.authUser,
      products: state.product.products,
    }),
    shallowEqual,
  )

  //Component's state
  const [userProductsByCategory, setUserProductsByCategory] = useState([])

  useEffect(() => {
    async function getUserProducts() {
      const userProductsByCategory = products.filter(
        product =>
          product.userUid === authUser.userUid && product.category === category,
      )
      setUserProductsByCategory(userProductsByCategory)
    }

    getUserProducts()
  }, [authUser, category, products])

  const dispatch = useDispatch()

  function handleRemoveProduct(rowIndex) {
    dispatch(ProductActions.removeUserProduct(rowIndex))
    alertSuccessMessage('Product has been removed')
  }

  if (isLoading) {
    return <LoaderBullets />
  }

  return (
    <StyledContainer>
      {!userProductsByCategory.length > 0 ? (
        <>
          <Title>
            This category is empty. Why don't you create your first product
            here?
          </Title>
          <GoToProfile>
            <Link to="/create">Insert a product</Link>
          </GoToProfile>
        </>
      ) : (
        <>
          <Title>{category.toUpperCase()} PRODUCTS</Title>
          <CardContainer>
            <>
              {userProductsByCategory.map(product => (
                <CardDiv key={product.createdAt}>
                  <CardContent>
                    <div>
                      <CardTitle>{product.name}</CardTitle>
                      <CardDescription>
                        Quantity: {product.qty} | Unity price: R$
                        {product.price}
                      </CardDescription>
                    </div>
                    <div>
                      <button disabled>Edit</button>
                      <button
                        onClick={() => handleRemoveProduct(product.rowIndex)}
                      >
                        Remove
                      </button>
                    </div>
                  </CardContent>
                </CardDiv>
              ))}
            </>
          </CardContainer>
        </>
      )}
    </StyledContainer>
  )
}

ProductList.propTypes = {
  category: PropTypes.string.isRequired,
}
