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
            allDeliveries: Store.getDeliveries(),
            deliveries: Store.getCurrentDeliveries(),
            page: 1, // Set to 0 on load, componentDidMount will change this to 1 on render
            hideEarlier: '',
            hideLater: '',
        }

        this.maxPerPage         = 5
        this.maxNumberPages     = Math.ceil( this.state.allDeliveries.length / this.maxPerPage )
        this.laterDeliveries    = this.laterDeliveries.bind(this)
        this.earlierDeliveries  = this.earlierDeliveries.bind(this)
    }

    componentDidMount() {
        this.displayButton()
    }

    displayButton() {
        // If current page can have both buttons visible
        if ( this.state.page > 1 && this.state.page < this.maxNumberPages ) {
            this.setState({
                hideEarlier: '',
                hideLater: '',
            })
        } else if ( this.state.page <= 2 ) { // Make sure previous isn't shown on page 1
            this.setState({
                hideEarlier: 'hide',
                hideLater: '',
            })
        } else if (this.state.page >= this.maxNumberPages ) {
            this.setState({
                hideEarlier: '',
                hideLater: 'hide',
            })
        }
    }

    laterDeliveries() {
        this.setState({
            deliveries: Store.laterDeliveries(),
            page: this.state.page + 1,
        }, _ => this.displayButton() )

    }

    earlierDeliveries() {
        this.setState({
            deliveries: Store.earlierDeliveries(),
            page: this.state.page - 1,
        }, _ => this.displayButton())

    }

    render() {

        if ( this.state.deliveries ) {
            var Items = this.state.deliveries.map( delivery => {
                return (
                    <DeliveryItem key={delivery.id} delivery={delivery}/>
                )
            })
        } else {
            var Items = ''
        }

        return (
            <div className="decoration decoration__paper decoration__tape decoration__tape--left deliveries">
                <h2 className="text-center deliveries__title">Your upcoming deliveries</h2>

                <p className="text-center deliveries__introduction">Going on holiday? Not a fan of next weeks flowers? Skip upcoming deliveries here.</p>

                {Items}

                <footer className="clearfix">
                    <a  href="#"
                        onClick={this.earlierDeliveries}
                        className={`${this.state.hideEarlier} no-link deliveries__more deliveries__more--earlier`}>
                        Earlier Deliveries
                    </a>
                    <a
                        href="#"
                        onClick={this.laterDeliveries}
                        className={`${this.state.hideLater} no-link deliveries__more deliveries__more--later`}>
                        Later Deliveries
                    </a>
                </footer>
            </div>
        )
    }
}

export default Deliveries
