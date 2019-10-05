import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

//Privando rota de usuários não logados
const PrivateRoute = ({ isLogged, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={props =>
        isLogged ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
      }
    />
  )
}

const mapStateToProps = state => ({
  isLogged: state.auth.isLogged
})

export default connect(mapStateToProps)(PrivateRoute)
