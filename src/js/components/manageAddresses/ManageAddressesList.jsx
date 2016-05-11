import React from 'react'

import NewAddressForm from './NewAddressForm'
import EditAddressForm from './EditAddressForm'
import ActionButtons from './ActionButtons'

import GlobalConstant from '../../constants/GlobalConstants'

import Store from '../../stores/deliveryAddressStore'
import Actions from '../../actions/deliveryAddressActions'


class ManageAddresses extends React.Component {

    constructor(props) {
        super()
        this.state = {
            newFormVisibility: 'hide',
            editFormVisibility: 'hide',
            hidden: '',
            selected: '',
            addresses: Store.getAddresses(),
        }
    }

    componentDidMount() {
        Store.on("change", _ => {
            this.setState({
                addresses: Store.getAddresses()
            })

            this.checkAddressCount()
        })
    }

    toggleFormVisibility(e = '') {
        if ( e != '') {
            e.preventDefault()
        }

        if ( this.state.newFormVisibility) {
            this.setState({ newFormVisibility: '' })
        } else {
            this.setState({ newFormVisibility: 'hide' })
        }
    }

    checkAddressCount() {

        if ( this.state.addresses.length <= GlobalConstant.MIN_ADDRESSES  ) {
            this.setState({
                hidden: 'hide'
            })
        } else {
            this.setState({
                hidden: ''
            })
        }
    }

    editAddress(address) {
        if ( this.state.editFormVisibility) {
            this.setState({
                editFormVisibility: '',
                selected: address
            })
        } else {
            this.setState({
                editFormVisibility: 'hide',
                selected: ''
            })
        }
    }

    deleteAddress(event) {
        const id = event.target.getAttribute('data-id')
        Actions.deleteAddress(id)
    }

    render() {
        const addresses = this.state.addresses
        const tableRows = addresses.map( address => {

            return (
                <tr key={address.id} className="table__row">
                    <td>{address.address}</td>
                    <td>
                        <ActionButtons addressData={address}>
                            {address.quantity} {address.quantity > 1 ? 'boxes' : 'box'}
                        </ActionButtons>
                    </td>
                    <td>£{address.cost}</td>
                    <td>
                        <button
                            className="button button__primary"
                            onClick={ _ => this.editAddress(address) }>
                            Edit
                        </button>

                        <button
                            className={"button button__secondary " + this.state.hidden}
                            onClick={this.deleteAddress.bind(this)}
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

                    <table className="table table--stackable">
                        <thead>
                            <tr className="table__row table__row--header">
                                <td><h3>First Line of address</h3></td>
                                <td><h3>Quantity</h3></td>
                                <td><h3>Total cost (inc delivery)</h3></td>
                                <td><h3>Manage</h3></td>
                            </tr>
                        </thead>

                        <tbody>
                            {tableRows}
                        </tbody>
                    </table>


                <button className="button button__primary" onClick={this.toggleFormVisibility.bind(this)}>Add an new delivery address</button>

                <div className={`form form__addAddress ${this.state.newFormVisibility}`} >
                    <NewAddressForm />
                </div>

                <div className={`form edit__addAddress ${this.state.editFormVisibility}`} >
                    <EditAddressForm editingAddress={this.state.selected} />
                </div>


            </div>
        )
    }
}

export default ManageAddresses
