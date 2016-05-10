import React from 'react'

import Store from '../../stores/deliveryAddressStore'

class ActionButtons extends React.Component {

    constructor(props) {
        super(props)
        const quantity = this.props.addressData.quantity

        if ( quantity <= 1 ) {
            this.state = {
                decreaseDisabled: true,
            }
        } else {
            this.state = {
                decreaseDisabled: false
            }
        }

        if ( quantity >= 4  ) {
            this.state = {
                increaseDisabled: true
            }
        } else {
            this.state = {
                increaseDisabled: false
            }
        }
    }

    componentDidUpdate() {
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

    componentDidMount() {
        Store.on("change", _ => {
            // const getChangedAddress = filter
            // this.setState({
            //     bankDetails: Store.getBankDetails()
            // })
        })
    }

    decreaseDelivery(event) {
        const address = this.props.addressData

        Store.decreaseDelivery(address.id)

        if ( address.quantity > 1 ) {
            this.setState({
                decreaseDisabled: false
            })
        } else {
            this.setState({
                decreaseDisabled: true
            })
        }
    }

    increaseDelivery(event) {
        const address = this.props.addressData

        Store.increaseDelivery(address.id)

        if ( address.quantity >= 4 ) {
            this.setState({
                increaseDisabled: true
            })
        } else {
            this.setState({
                increaseDisabled: false
            })
        }
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
