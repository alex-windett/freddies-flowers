import React from 'react'

import Store from '../../stores/deliveryAddressStore'

class ActionButtons extends React.Component {

    constructor(props) {
        super(props)
        const quantity = this.props.addressData.quantity

        this.state = {
            decreaseHide: '',
            increaseHide: '',
        }
    }

    checkButtonDisablity() {
        const quantity = this.props.addressData.quantity

        if ( quantity <= 1 ) {
            this.setState({
                decreaseHide: 'hide',
            })
        } else {
            this.setState({
                decreaseHide: ''
            })
        }

        if ( quantity >= 4  ) {
            this.setState({
                increaseHide: 'hide'
            })
        } else {
            this.setState({
                increaseHide: ''
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
                    className={"button button__secondary button__secondary--decrementer " + this.state.decreaseHide}
                    onClick={this.decreaseDelivery.bind(this)}
                    > -
                </button>

                {this.props.children}

                <button
                    className={"button button__secondary button__secondary--incrementer " + this.state.increaseHide}
                    onClick={this.increaseDelivery.bind(this)}
                    > +
                </button>
            </div>
        )
    }
}

export default ActionButtons
