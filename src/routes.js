import React, { Fragment } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import PrivateRoute from './utils/PrivateRoute'

import { connect } from 'react-redux'

//Components
import Header from './components/Header'
import Menu from './components/Menu'
import Categories from './components/CategoryCards'
import ProductList from './components/ProductList'
import ProductForm from './components/ProductForm'
import Comparative from './components/Comparative'

//Pages
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import ForgotPassword from './pages/ForgotPassword'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'

import { Categories as CategoriesMock } from './utils/Mocks/Categories'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={SignIn} />
      <Route exact path='/signup' component={SignUp} />
      <Route exact path='/forgotpw' component={ForgotPassword} />

      <PrivateRoute
        exact
        path='/profile'
        component={() => (
          <Fragment>
            <Profile />
          </Fragment>
        )}
      />

      <PrivateRoute
        exact
        path='/create'
        component={() => (
          <Fragment>
            <Header />
            <Menu />
            <ProductForm />
          </Fragment>
        )}
      />

      <PrivateRoute
        exact
        path='/categories'
        component={props => (
          <Fragment>
            <Header />
            <Menu />
            <Categories {...props.authUser} />
          </Fragment>
        )}
      />

      {CategoriesMock.map(category => (
        <PrivateRoute
          exact
          key={category.title}
          path={`/categories/${category.title.toLowerCase()}`}
          component={() => (
            <Fragment>
              <Header />
              <Menu />
              <ProductList category={category.title} />
            </Fragment>
          )}
        />
      ))}

      <PrivateRoute
        exact
        path='/categories'
        component={() => (
          <Fragment>
            <Header />
            <Menu />
            <Categories />
          </Fragment>
        )}
      />

      <PrivateRoute
        exact
        path='/comparative'
        component={() => (
          <Fragment>
            <Header />
            <Menu />
            <Comparative />
          </Fragment>
        )}
      />

      <PrivateRoute
        exact
        path='/tips'
        component={() => (
          <Fragment>
            <Header />
            <Menu />
            <h1>Tips</h1>
          </Fragment>
        )}
      />

      <Route path='*' exact={true} component={NotFound} />
    </Switch>
  </BrowserRouter>
)

const mapStateToProps = state => ({
  authUser: state.auth.authUser,
  products: state.product.products
})

const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Routes)
