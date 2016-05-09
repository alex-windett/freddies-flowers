import React from 'react'
import ReactDOM from 'react-dom'

import Form from './Form'
import ManageAddressesListItems from './ManageAddressesListItems'

import Store from '../../stores/deliveryAddressStore'
import Actions from '../../actions/deliveryAddressActions'

class ManageAddresses extends React.Component {

    constructor(props) {
        super()
        this.state = {
            formVisibility: 'hide',
            disabled: '',
            addresses: Store.getAddresses()
        }
    }

    componentDidMount() {
        Store.on("change", _ => {
            this.setState({
                addresses: Store.getAddresses()
            })
        })
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

    checkAddressCount(callback) {
        if ( this.state.addresses.length < 2 ) {
            this.setState({
                disabled: true
            })
        } else {
            this.setState({
                disabled: false
            })
        }

        callback
    }

    editAddress(address) {
        this.setState({
            editFormVisibility: '',
            selected: address
        })

        // TODO:
            // * Fix issue with submitting edit form
    }

    cancelAddress(event) {
        let id = event.target.getAttribute('data-id')
        this.checkAddressCount( Actions.cancelAddress(id) )
    }

    render() {
        const addresses = this.state.addresses
        const tableRow = addresses.map( address => {

            return (
                <tr key={address.id}>
                    <td>{address.address}</td>
                    <td>{address.quantity}</td>
                    <td>{address.cost}</td>
                    <td>
                        <button
                            className="button button__primary"
                            onClick={ _ => this.editAddress(address) }>
                            Edit
                        </button>

                        <button
                            className="button button__secondary" disabled={this.state.disabled}    onClick={this.cancelAddress.bind(this)}
                            data-id={address.id}>
                            Cancel
                        </button>
                    </td>
                </tr>
            )
        })
        return (
            <div className="decoration decoration__plain padder">
                <h2 className="text-center">Manage your delivery address</h2>

                    <table>
                        <tbody>
                            <tr>
                                <td>First Line of address</td>
                                <td>Quantity</td>
                                <td>Total cost</td>
                                <td>Manage</td>
                            </tr>

                            {tableRow}

                            {/*<ManageAddressesListItems data={this.state.addresses}/>*/}
                        </tbody>
                    </table>


                <button className="button button__primary" onClick={this.toggleFormVisibility.bind(this)}>Add an new delivery address</button>

                <div className={this.state.formVisibility + " form form__addAddress"}>
                    <Form />
                </div>
            </div>
        )
    }
}

export default ManageAddresses
