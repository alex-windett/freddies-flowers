import React from 'react'

const DeliveryItem = React.createClass({

    render() {

        return (
            <div>
                <h4>Friday 4 September</h4> <button>SKIP</button>
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
                <h2>Your upcoming deliveries</h2>

                <p>Going on holiday? Not a fan of next week's flowers? Skip upcoming deliveries here.</p>
            </div>
        )
    }
}

export default Delivery
