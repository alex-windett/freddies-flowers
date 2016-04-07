import React from 'react'
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
