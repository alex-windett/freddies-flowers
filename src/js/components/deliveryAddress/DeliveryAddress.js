import React from 'react'
import ReactDOM from 'react-dom'

import Store from '../../stores/deliveryAddressStore'
import Actions from '../../actions/deliveryAddressActions'

const AddAddressForm = React.createClass({

    getInitialState() {

        return {
            formVisibility: 'hide'
        }
    },

    toggleFormVisibility(e = '') {
        if ( e != '') {
            e.preventDefault()
        }

        if ( this.state.formVisibility) {
            this.setState({ formVisibility: '' })
        } else {
            this.setState({ formVisibility: 'hide' })
        }
    },

    addAddress(e) {
        e.preventDefault();
        const refs      = this.refs

    },

    render() {

        return (
            <div>
                <button className="button button__primary" onClick={this.toggleFormVisibility}>Add an new delivery address</button>

                <form onSubmit={this.addAddress} className={this.state.formVisibility + " form form__addAdress"} method="post">
                    <label>Postcode:</label>
                    <input type="text" ref="postcode"/>
                    <label>House name or number</label>
                    <input type="text" ref="houseNumber"/>
                    <label>Street Name</label>
                    <input type="text" ref="streetName"/>
                    <label>Town or City</label>
                    <input type="text" ref="city"/>

                    <input className="button button__primary" type="submit" value="Submit" />
                    <button className="button button__primary" onClick={this.toggleFormVisibility}>Cancel</button>

                    <p className="text-center">Enter your postcode to calculate delivery charge</p>
                </form>
            </div>
        )
    }
})

const AddressItem = React.createClass({

    editAddress() {
        Actions.editAddress()
    },

    cancelAddress() {
        Actions.cancelAddress()
    },

    render() {

        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>First Line of address</td>
                            <td>Quantity</td>
                            <td>Total cost</td>
                            <td>Manage</td>
                        </tr>

                        <tr>
                            <td>9 Takhar Mews</td>
                            <td>1 box</td>
                            <td>20</td>
                            <td>
                                <button className="button button__primary" onClick={this.editAddress}>Edit</button>
                                <button className="button button__primary" onClick={this.cancelAddress}>Cancel</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
})

class Address extends React.Component {

    constructor() {
        super()
    }

    render() {

        return (
            <div>
                <h2 className="text-center">Manage your delivery address</h2>

                <AddressItem />

                <AddAddressForm />
            </div>
        )
    }
}

export default Address;
