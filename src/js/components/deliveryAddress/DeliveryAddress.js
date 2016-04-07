import React from 'react'
import Store from '../../stores/deliveryAddressStore'
import Actions from '../../actions/deliveryAddressActions'

const AddressItem = React.createClass({

    getInitialState() {

        return {
            formVisibility: 'hide'
        }
    },

    editAddress() {
        Actions.editAddress()
    },

    cancelAddress() {
        Actions.cancelAddress()
    },

    addAddress() {

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
                                <button className="button" onClick={this.editAddress}>Edit</button>
                                <button className="button alert" onClick={this.cancelAddress}>Cancel</button>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <button className="button success" onClick={this.toggleFormVisibility}>Add an new delivery address</button>

                <form className={this.state.formVisibility + " form form__addAdress"} method="post">
                    <label>Postcode:</label>
                    <input type="text"/>
                    <label>House name or number</label>
                    <input type="text"/>
                    <label>Street Name</label>
                    <input type="text"/>
                    <label>Town or City</label>
                    <input type="text"/>

                    <button className="button success" onClick={this.addAddress}>Sumbit</button>
                    <button className="button alert" onClick={this.toggleFormVisibility}>Cancel</button>

                    <p className="text-center">Enter your postcode to calculate delivery charge</p>
                </form>
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
            </div>
        )
    }
}

export default Address;
