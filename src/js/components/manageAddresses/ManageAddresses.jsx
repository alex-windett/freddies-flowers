import React                            from 'react'

import ManageAddressesNewAddress        from './ManageAddressesNewAddress'
import ManageAddressesEditAddress       from './ManageAddressesEditAddress'
import ManageAddressesDeliveryButtons   from './ManageAddressesDeliveryButtons'

import GlobalConstant                   from '../../constants/GlobalConstants'

import Store                            from '../../stores/deliveryAddressStore'
import Actions                          from '../../actions/deliveryAddressActions'


class ManageAddresses extends React.Component {

    constructor() {
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
                <tr key={address.id} className="table__row address">
                    <td className="address__address">{address.address}</td>
                    <td className="address__boxs">
                        <ManageAddressesDeliveryButtons addressData={address}>
                            {address.quantity} {address.quantity > 1 ? 'boxes' : 'box'}
                        </ManageAddressesDeliveryButtons>
                    </td>
                    <td className="address__cost">Total Cost: £{address.cost}</td>
                    <td className="address__buttons">
                        <button
                            className="button button__primary address__buttons--button"
                            onClick={ _ => this.editAddress(address) }>
                            Edit
                        </button>

                        <button
                            className={`button button__secondary  address__buttons--button ${this.state.hidden}`}
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


                <button
                    className="button button__primary newaddresstoggle"  onClick={this.toggleFormVisibility.bind(this)} >
                    Add an new delivery address
                </button>

                <div className={`form form__addAddress ${this.state.newFormVisibility}`} >
                    <ManageAddressesNewAddress />
                </div>

                <div className={`form form__editAddress ${this.state.editFormVisibility}`} >
                    <ManageAddressesEditAddress editingAddress={this.state.selected} />
                </div>


            </div>
        )
    }
}

export default ManageAddresses
