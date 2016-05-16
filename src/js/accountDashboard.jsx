import React from 'react'
import ReactDOM from 'react-dom'

import Deliveries from './components/deliveries/Deliveries'
import Share from './components/share/Share'
import ManageAddressesList from './components/manageAddresses/ManageAddressesList'
import AccountDetails from './components/accountDetails/AccountDetails'
import BankDetails from './components/bankDetails/BankDetails'


class AccountDashboard extends React.Component {

    constructor() {
        super()
    }

    render() {
        return (
            <section className="dashboard">
                <div className='row'>
                    <div className='column medium-6 dashboard__item'>
                        <Deliveries />
                    </div>

                    <div className='column medium-6 dashboard__item dashboard__item--share'>
                        <Share />
                    </div>
                </div>

                <div className="row column dashboard__item dashboard__item--addresses">
                    <ManageAddressesList />
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
                    <div className="text-center padder">
                        <h2>Having problems?s</h2>

                        <p>Please do let us know if everythings not absolutely perfect with your deliveries and well do our best to make it all better.</p>
                        <p>Either give us a call on 0207 801 6241</p>
                        <p>Or drop us a line at <a href="mailto:freddie@freddiesflowers.co">freddiefreddiesflowers.com</a></p>
                        <p>If theres absolutely nothing we can do to win you over, then either give us a call on 0207 801 6241 or send us an email on freddiefreddiesflowers.com and well immediately cancel your account.</p>
                    </div>
                </div>
            </section>
        )
    }
}

export default AccountDashboard
