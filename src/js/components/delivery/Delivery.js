import React from 'react'
import Store from '../../stores/deliveryStore'
import Actions from '../../actions/deliveryActions'

const DeliveryItem = React.createClass({

    getInitialState() {

        return {
            active: true,
            delivery: this.props.data
        }
    },

    removeDelivery() {

        if ( this.state.active ) {
            this.setState({ active: false })
        } else {
            this.setState({ active: true })
        }

        Actions.removeDelivery(this.state.delivery.id)
    },

    render() {
        const delivery = this.state.delivery

        if ( this.state.active ) {

            var textStyles = {
                textDecoration: 'none'
            }
        } else {

            var textStyles = {
                textDecoration: 'line-through'
            }
        }


        return (
            <div key={delivery.id}>
                <p style={textStyles}>{delivery.date}</p>

                <input type="checkbox" onClick={this.removeDelivery}/>

                <hr />
            </div>
        )
    }
})

const DeliveryItems = React.createClass({

    getInitialState() {

        return {
            active: true,
            deliveries: Store.getDeliveries()
        }
    },

    componentDidMount() {
        Store.on("change", _ => {
            this.setState({
                deliveries: Store.getDeliveries()
            })
        })
    },

    render() {

        const Items = this.state.deliveries.map( delivery => {
            return (
                <DeliveryItem key={delivery.id} data={delivery}/>
            )
        })

        return (
            <div>
                {Items}
            </div>
        )
    }

});

class Delivery extends React.Component {

    constructor() {
        super()
    }

    render() {

        return (
            <div>
                <h2 className="text-center">Your upcoming deliveries</h2>

                <p>Going on holiday? Not a fan of next weeks flowers? Skip upcoming deliveries here.</p>

                <DeliveryItems />
            </div>
        )
    }
}

export default Delivery
