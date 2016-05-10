import React from 'react'
import ReactDOM from 'react-dom'

import Form from './Form'

import Store from '../../stores/deliveryAddressStore'
import Actions from '../../actions/deliveryAddressActions'

var OrderChangeButton = React.createClass({
    checkQunantity(address, buttonType) {
        if ( buttonType === 'decrementer' ) {
            address.quantity > 1 ? true : false
        } else if ( buttonType === 'incrementer' ) {
            address.quantity <= 4 ? true : false
        }
    },

    getInitialState() {
        const incrementerDisabled = this.checkQunantity(this.props.addressData, this.props.buttonType)
debugger
        return {
            buttonType: this.props.buttonType,
            disabled: incrementerDisabled,
        }
    },

    editDelivery(event) {
        const address = this.props.addressData

        this.setState({
            disabled: this.checkQunantity(address, this.state.buttonType),
        })

        if ( this.state.buttonType === "decrementer" ) {
            Store.decreaseDelivery(address.id)
        }  else if ( this.state.buttonType === "incrementer" ) {
            Store.increaseDelivery(address.id)
        }
    },

    render() {

        return (

            <button
                className={"button button__secondary button__secondary--" + this.state.buttonType}
                onClick={this.editDelivery}
                disabled={this.state.disabled}
                >
                { this.state.buttonType === "decrementer" ? "-" : "+"  }
            </button>
        )
    }
})


class ManageAddresses extends React.Component {

    constructor(props) {
        super()
        this.state = {
            formVisibility: 'hide',
            disabled: '',
            addresses: Store.getAddresses(),
            decrementerButton: "decrementer",
            incrementerButton: "incrementer",
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
        const tableRows = addresses.map( address => {

            return (
                <tr key={address.id} className="table__row">
                    <td>{address.address}</td>
                    <td>
                        <OrderChangeButton
                            addressData={address}
                            buttonType={this.state.decrementerButton}
                            />

                        {address.quantity} {address.quantity > 1 ? 'boxes' : 'box'}

                        <OrderChangeButton
                            addressData={address}
                            buttonType={this.state.incrementerButton}
                            />
                    </td>
                    <td>£{address.cost}</td>
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

                <div className={this.state.formVisibility + " form form__addAddress"}>
                    <Form />
                </div>
            </div>
        )
    }
}

export default ManageAddresses
