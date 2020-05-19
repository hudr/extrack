import React, { Fragment } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { Creators as ProductActions } from '../../store/ducks/product'
import { alertSuccessMessage } from '../../utils/SweetAlert'
import '../../../src/App.css'
import {
  StyledContainer,
  CardContainer,
  CardDiv,
  CardContent,
  CardStore,
  CardProduct,
  CardPrice,
  CardActions,
  CardLink,
  CardButton,
} from './styled'

export default function TipsList({ category }) {
  //Getting redux states
  const { userUid, tips } = useSelector(
    state => ({
      userUid: state.auth.authUser.userUid,
      tips: state.product.tips,
    }),
    shallowEqual,
  )

  const userTips = tips.filter(tip => tip.userUid === userUid)

  const dispatch = useDispatch()

  function handleRemoveTip(rowIndex) {
    dispatch(ProductActions.removeUserTip(rowIndex))
    alertSuccessMessage('Tip has been removed')
  }

  return (
    <StyledContainer>
      {userTips.length > 0 ? (
        <CardContainer>
          {userTips.map(tip => (
            <Fragment key={tip.rowIndex}>
              <CardDiv>
                <CardContent>
                  <CardStore>{tip.store}</CardStore>
                  <CardProduct>{tip.title}</CardProduct>
                  <CardPrice>R${tip.price}</CardPrice>
                  <CardActions>
                    <CardLink href={tip.url} target="_blank">
                      Buy
                    </CardLink>
                    <CardButton onClick={() => handleRemoveTip(tip.rowIndex)}>
                      Remove
                    </CardButton>
                  </CardActions>
                </CardContent>
              </CardDiv>
            </Fragment>
          ))}
        </CardContainer>
      ) : (
        <h1 style={{ maxWidth: '70%', textAlign: 'center' }}>
          You don't have any tip yet!
        </h1>
      )}
    </StyledContainer>
  )
}
