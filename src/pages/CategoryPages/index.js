import React, { Fragment, Component } from 'react'
import { withRouter } from 'react-router-dom'

import Header from '../../components/Header'
import Menu from '../../components/Menu'


class Food extends Component {
    state = {
        productName: '',
        price: ''

    }

    render() {
        const { productName, price } = this.state

        return (

            <form>
                <input
                    type='text'
                    placeholder='Product Name'
                    value={productName}
                    onChange={e => this.state({ productName: e.target.value })}
                ></input>
                <input
                    type='text'
                    placeholder='Price'
                    value={price}
                    onChange={e => this.state({ price: e.target.value })}
                ></input>

            </form>

        )
    }

}

export default withRouter(Food)