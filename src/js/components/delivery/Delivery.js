import React from 'react'

const DeliveryItem = React.createClass({

    render() {

        return (
            <div>
                <h4>Friday 4 September</h4> <button className="button">SKIP</button>

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
