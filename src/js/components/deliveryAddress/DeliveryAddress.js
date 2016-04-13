import React from 'react'
import ReactDOM from 'react-dom'

import Form from './Form'

import Store from '../../stores/deliveryAddressStore'
import Actions from '../../actions/deliveryAddressActions'

const AddressItem = React.createClass({

    editAddress() {
        Actions.editAddress()
    },

    cancelAddress() {
        Actions.cancelAddress()
    },

    render() {

        return (


            <tr>
                <td>9 Takhar Mews</td>
                <td>1 box</td>
                <td>20</td>
                <td>
                    <button className="button button__primary" onClick={this.editAddress}>Edit</button>
                    <button className="button button__primary" onClick={this.cancelAddress}>Cancel</button>
                </td>
            </tr>

        )
    }
})

class Address extends React.Component {

    constructor() {
        super()

        this.state = {
            formVisibility: ''
            // formVisibility: 'hide'
        }
    }

    toggleFormVisibility(e = '') {
        if ( e != '') {
            e.preventDefault()
        }

        if ( this.state.formVisibility) {
            this.setState({ formVisibility: '' })
        } else {
            this.setState({ formVisibility: 'hide' })
        }
    }

    render() {

        return (
            <div>
                <h2 className="text-center">Manage your delivery address</h2>

                    <table>
                        <tbody>
                            <tr>
                                <td>First Line of address</td>
                                <td>Quantity</td>
                                <td>Total cost</td>
                                <td>Manage</td>
                            </tr>

                            <AddressItem />
                        </tbody>
                    </table>


                <button className="button button__primary" onClick={this.toggleFormVisibility.bind(this)}>Add an new delivery address</button>

                <div className={this.state.formVisibility}>
                    <Form />
                </div>
            </div>
        )
    }
}

export default Address;
