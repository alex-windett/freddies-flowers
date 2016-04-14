import React from 'react'
import ReactDOM from 'react-dom'

import Form from './Form'
import AddressItems from './DeliveryAddressItems'

import Store from '../../stores/deliveryAddressStore'
import Actions from '../../actions/deliveryAddressActions'

class Address extends React.Component {

    constructor(props) {
        super()
        this.state = {
            formVisibility: 'hide',
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

                            <AddressItems data={this.state.addresses}/>
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

export default Address;
