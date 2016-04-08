import React from 'react'

import Delivery from './components/delivery/Delivery.js'
import Share from './components/share/Share.js'
import DeliveryAddress from './components/deliveryAddress/DeliveryAddress.js'
import AccountDetails from './components/accountDetails/AccountDetails.js'
import BankDetails from './components/bankDetails/BankDetails.js'
import Cancel from './components/cancel/Cancel.js'


class App extends React.Component {

    constructor() {
        super()
    }

    render() {
        return (
            <section className="dashboard">
                <div className='row'>
                    <div className='column medium-6 dashboard__item'>
                        <Delivery />
                    </div>

                    <div className='column medium-6 dashboard__item'>
                        <Share />
                    </div>
                </div>

                <div className="row column dashboard__item">
                    <DeliveryAddress />
                </div>

                <div className='row'>
                    <div className='column medium-6 dashboard__item'>
                        <AccountDetails />
                    </div>

                    <div className='column medium-6 dashboard__item'>
                        <BankDetails />
                    </div>
                </div>

                <div className="row column dashboard__item">
                    <Cancel />
                </div>
            </section>
        )
    }
}

export default App
