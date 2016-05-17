import React        from 'react'
import Store        from '../../stores/deliveryStore'
import Actions      from '../../actions/deliveryActions'

const DeliveryItem = React.createClass({

    propTypes: {
        active: React.PropTypes.bool,
        delivery: React.PropTypes.object
    },

    removeDelivery() {
        Actions.removeDelivery(this.props.delivery.id)
    },

    render() {

        return (

            <section className="boleanInput clearfix delivery" onClick={this.removeDelivery} key={this.props.delivery.id} >
                <input
                    className="booleanInput__input booleanInput__input--checkbox"
                    checked={this.props.delivery.active}
                    onChange={this.removeDelivery}
                    type="checkbox" />
                <label
                    className="boleanInput__label delivery__date"
                    htmlFor="ticked-checkbox">{this.props.delivery.date}</label>
            </section>
        )
    }
})

class Deliveries extends React.Component {

    constructor() {
        super()
        this.state = {
            deliveries: Store.getDeliveries()
        }
    }

    componentDidMount() {
        Store.on("change", _ => {
            this.setState({
                deliveries: Store.getDeliveries()
            })
        })
    }

    render() {

        const Items = this.state.deliveries.map( delivery => {
            return (
                <DeliveryItem key={delivery.id} delivery={delivery}/>
            )
        })

        return (
            <div className="decoration decoration__paper decoration__tape decoration__tape--left deliveries">
                <h2 className="text-center deliveries__title">Your upcoming deliveries</h2>

                <p className="text-center deliveries__introduction">Going on holiday? Not a fan of next weeks flowers? Skip upcoming deliveries here.</p>

                {Items}
            </div>
        )
    }
}

export default Deliveries
