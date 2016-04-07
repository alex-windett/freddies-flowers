import React from 'react'

const DeliveryItem = React.createClass({

    getInitialState() {

        return {
            active: true
        }
    },

    toggleState() {
        if ( this.state.active ) {
            this.setState({ active: false })
        } else {
            this.setState({ active: true })
        }
    },

    render() {
        if ( this.state.active ) {
            var activeClass = 'secondary'
            var activeText  = 'SKIP'

            var textStyles = {
                textDecoration: 'none'
            }
        } else {
            var activeClass = 'success'
            var activeText  = 'ACTIVATE'

            var textStyles = {
                textDecoration: 'line-through'
            }
        }

        return (
            <div>
                <h4 style={textStyles}>Friday 4 September</h4> <button className={"button " + activeClass} onClick={this.toggleState}>{activeText}</button>

                <hr />
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

                <DeliveryItem />
            </div>
        )
    }
}

export default Delivery
