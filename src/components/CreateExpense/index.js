import React, { Component, Fragment } from 'react'

export default class CreateExpense extends Component {
  render() {
    return (
      <Fragment>
        <div class='container-contact100'>
          <div class='wrap-contact100'>
            <form class='contact100-form validate-form'>
              <span class='contact100-form-title'>Register your product</span>

              <select id='categories'>
                <option value=''></option>
                <option value='food'>Food</option>
                <option value='house'>House</option>
                <option value='vehicle'>Vehicle</option>
                <option value='health'>Health</option>
                <option value='Beauty'>Beauty</option>
                <option value='personal'>Personal</option>
              </select>

              <div class='wrap-input100 validate-input'>
                <label class='label-input100' for='productName'>
                  Product Name
                </label>
                <input
                  id='productName'
                  class='input100'
                  type='text'
                  name='productName'
                  placeholder='Enter your product name...'
                />
                <span class='focus-input100'></span>
              </div>

              <div class='wrap-input100 validate-input'>
                <label class='label-input100' for='price'>
                  Price
                </label>
                <input
                  id='price'
                  class='input100'
                  type='text'
                  name='price'
                  placeholder='Enter price this product...	'
                />
                <span class='focus-input100'></span>
              </div>

              <div class='container-contact100-form-btn'>
                <button class='contact100-form-btn'>Save</button>
              </div>
            </form>
          </div>
        </div>
      </Fragment>
    )
  }
}
