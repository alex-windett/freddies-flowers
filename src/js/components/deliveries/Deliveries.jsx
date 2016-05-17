import React        from 'react'
import Store        from '../../stores/deliveryStore'
import Actions      from '../../actions/deliveryActions'

const DeliveryItem = React.createClass({

    propTypes = {
        active: React.PropTypes.bool,
        defaultChecked: React.PropTypes.bool,
        delivery: React.PropTypes.object
    }

    getInitialState() {

        return {
            active: this.props.data.active,
            defaultChecked: this.props.data.active,
            delivery: this.props.data
        }
    },

    componentDidMount() {
        Store.on("change", _ => {
            this.setState({
                active: this.props.data.active,
                defaultChecked: this.props.data.active,
                delivery: this.props.data,
            })
        })
    },

    removeDelivery() {
        Actions.removeDelivery(this.state.delivery.id)
    },

    render() {

        const delivery = this.state.delivery

        return (

            <section className="boleanInput clear" onClick={this.removeDelivery} key={delivery.id} >
                <input
                    className={`booleanInput__input booleanInput__input--checkbox clear`} checked={this.state.defaultChecked}
                    onChange={this.removeDelivery}
                    type="checkbox" />
                <label
                    className="boleanInput__label clear"
                    htmlFor="ticked-checkbox">{delivery.date}</label>
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
                <DeliveryItem key={delivery.id} data={delivery}/>
            )
        })

        return (
            <div className="decoration decoration__paper decoration__tape decoration__tape--left">
                <h2 className="text-center">Your upcoming deliveries</h2>

                <p>Going on holiday? Not a fan of next weeks flowers? Skip upcoming deliveries here.</p>

                {Items}
            </div>
        )
    }
}

export default Deliveries
