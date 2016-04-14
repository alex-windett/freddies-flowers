import React from 'react'
import ReactDOM from 'react-dom'

import Form from './Form'

import Store from '../../stores/deliveryAddressStore'
import Actions from '../../actions/deliveryAddressActions'

class AddressItems extends React.Component{

    constructor() {
        super()

        this.state = {
            disabled: '',
            editFormVisibility: 'hide',
            selected: {}
        }
    }

    checkAddressCount(callback) {
        if ( this.props.data.length < 2 ) {
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


    componentWillMount(){
        this.checkAddressCount()
    }

    render() {
        const deliveries  = this.props.data

        const item        = deliveries.map( delivery => {

            return (
                <td key={delivery.id}>
                    <table>
                        <tbody>
                            <tr>
                                <td>{delivery.address}</td>
                                <td>{delivery.quantity}</td>
                                <td>{delivery.cost}</td>
                                <td>
                                    <button
                                        className="button button__primary"
                                        onClick={ _ => this.editAddress(delivery) }>
                                        Edit
                                    </button>

                                    <button
                                        className="button button__primary" disabled={this.state.disabled}    onClick={this.cancelAddress.bind(this)}
                                        data-id={delivery.id}>
                                        Cancel
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </td>
            )
        })

        return (
            <tr>
                {item}

                <div className={this.state.editFormVisibility + " form form__editAddress"}>
                    <Form selected={this.state.selected}/>
                </div>
            </tr>
        )
    }
}

export default AddressItems
