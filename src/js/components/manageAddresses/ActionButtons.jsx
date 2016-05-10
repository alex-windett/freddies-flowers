import React from 'react'

import Store from '../../stores/deliveryAddressStore'

class ActionButtons extends React.Component {

    constructor(props) {
        super(props)
        const quantity = this.props.addressData.quantity

        this.state = {
            decreaseDisabled: '',
            increaseDisabled: '',
        }
    }

    checkButtonDisablity() {
        const quantity = this.props.addressData.quantity

        if ( quantity <= 1 ) {
            this.setState({
                decreaseDisabled: true,
            })
        } else {
            this.setState({
                decreaseDisabled: false
            })
        }

        if ( quantity >= 4  ) {
            this.setState({
                increaseDisabled: true
            })
        } else {
            this.setState({
                increaseDisabled: false
            })
        }
    }

    componentWillReceiveProps() {
        this.checkButtonDisablity()
    }

    componentWillMount() {
        this.checkButtonDisablity()
    }

    decreaseDelivery(event) {
        const address = this.props.addressData

        Store.decreaseDelivery(address.id)
    }

    increaseDelivery(event) {
        const address = this.props.addressData

        Store.increaseDelivery(address.id)
    }

    render() {

        return (

            <div>
                <button
                    className="button button__secondary button__secondary--decrementer"
                    onClick={this.decreaseDelivery.bind(this)}
                    disabled={this.state.decreaseDisabled}
                    > -
                </button>

                {this.props.children}

                <button
                    className="button button__secondary button__secondary--incrementer"
                    onClick={this.increaseDelivery.bind(this)}
                    disabled={this.state.increaseDisabled}
                    > +
                </button>
            </div>
        )
    }
}

export default ActionButtons
