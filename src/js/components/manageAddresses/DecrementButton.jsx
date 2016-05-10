import React from 'react'

import Store from '../../stores/deliveryAddressStore'

class DecrementerButton extends React.Component {

    constructor(props) {
        super(props)

        if ( this.props.addressData.quantity > 1 ) {
            this.state = {
                disabled: false,
            }
        } else {
            this.state = {
                disabled: true
            }
        }
    }

    editDelivery(event) {
        const address = this.props.addressData

        Store.decreaseDelivery(address.id)

        if ( address.quantity > 1 ) {
            this.setState({
                disabled: false
            })
        } else {
            this.setState({
                disabled: true
            })
        }

        console.log(this.state)
    }

    render() {

        return (

            <button
                className="button button__secondary button__secondary--decrementer"
                onClick={this.editDelivery.bind(this)}
                disabled={this.state.disabled}
                > -
            </button>
        )
    }
}

export default DecrementerButton
