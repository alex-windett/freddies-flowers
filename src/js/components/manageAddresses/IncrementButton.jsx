import React from 'react'

import Store from '../../stores/deliveryAddressStore'

class IncrementerButton extends React.Component {

    constructor(props) {
        super(props)

        if ( this.props.addressData.quantity >= 4 ) {
            this.state = {
                disabled: true,
            }
        } else {
            this.state = {
                disabled: false
            }
        }
    }


    editDelivery(event) { 
        const address = this.props.addressData

        Store.increaseDelivery(address.id)

        if ( address.quantity >= 4 ) {
            this.setState({
                disabled: true
            })
        } else {
            this.setState({
                disabled: false
            })
        }
    }

    render() {
        return (

            <button
                className="button button__secondary button__secondary--incrementer"
                onClick={this.editDelivery.bind(this)}
                disabled={this.state.disabled}
                > +
            </button>
        )
    }
}

export default IncrementerButton
