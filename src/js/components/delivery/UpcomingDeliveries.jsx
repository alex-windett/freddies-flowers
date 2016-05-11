import React from 'react'
import Store from '../../stores/deliveryStore'
import Actions from '../../actions/deliveryActions'

const DeliveryItem = React.createClass({

    getInitialState() {
        return {
            active: this.props.data.active,
            delivery: this.props.data
        }
    },

    componentDidMount() {
        Store.on("change", _ => {
            this.setState({
                active: this.props.data.active,
                delivery: this.props.data,
            })
        })
    },

    removeDelivery() {
        Actions.removeDelivery(this.state.delivery.id)
    },

    render() {

        const delivery = this.state.delivery

        let textStyles = this.state.active ? "" : " 'textDecoration': 'line-throught' "

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

class UpcomingDeliveries extends React.Component {

    constructor() {
        super()
    }

    render() {

        return (
            <div className="decoration decoration__paper decoration__tape decoration__tape--left">
                <h2 className="text-center">Your upcoming deliveries</h2>

                <p>Going on holiday? Not a fan of next weeks flowers? Skip upcoming deliveries here.</p>

                <DeliveryItems />
            </div>
        )
    }
}

export default UpcomingDeliveries
