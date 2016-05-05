import React from 'react'
import Formsy from 'formsy-react';

import GlobalConstant from '../../constants/GlobalConstants'

import DropdownSelect from '../forms/DropdownSelect'
import Store from '../../stores/bankDetailsStore'
import Actions from '../../actions/bankDetailsActions'


class BankDetails extends React.Component {

    constructor() {
        super(),
        this.state = {
            canSubmit: false,
            bankDetails: Store.getBankDetails()
        }
    }

    enableButton() {
        this.setState({
            canSubmit: true
        })
    }

    disableButton() {
        this.setState({
            canSubmit: false
        })
    }

    componentDidMount() {
        Store.on(GlobalConstant.CHANGE_EVENT, _ => {
            this.setState({
                bankDetails: Store.getBankDetails()
            })
        })
    }

    render() {
        const addresses = this.state.bankDetails.addresses.map( a => {

            return <option key={a.id}>{a.address}</option>
        })

        const activeCard = this.state.bankDetails.cards.filter( c => {
            if ( c.active ) return c
        })

        var str = []
        //Create the "*" for exactly 4 digits short
        for( var i = 1; i <= activeCard[0].cardNumber.length - 4; i++) {
            str += "*";
        }
        //Join the asterisk and last 4 characters
        var ecard = `${str} ${activeCard[0].cardNumber.substr(activeCard[0].cardNumber.length-4)}`

        return (
            <div className="decoration decoration__paper decoration__tape">
                <h2 className="text-center">Manage your payment details</h2>

                <Formsy.Form onValidSubmit={this.submit} onValid={this.enableButton.bind(this)} onInvalid={this.disableButton.bind(this)}>
                    <label>Card Number</label>

                    <input type="text" pattern="[0-9]{13,16}" title="A credit card number" placeholder={ecard}/>

                    <button className="button button__secondary">Edit</button>
                </Formsy.Form>

                <Formsy.Form onValidSubmit={this.submit} onChange={this.enableButton.bind(this)} >
                    <DropdownSelect name="address">
                        {addresses}
                    </DropdownSelect>

                    <button className="button button__secondary" disabled={!this.state.canSubmit}>Edit</button>
                </Formsy.Form>
            </div>
        )
    }
}

export default BankDetails;
