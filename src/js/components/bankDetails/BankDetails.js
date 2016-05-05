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

            return (
                <option key={a.id}>{a.address}</option>
            )
        })


        const activeCard = this.state.bankDetails.cards.filter( c => {
            if ( c.active ) return c
        })

        return (
            <div className="decoration decoration__paper decoration__tape">
                <h2 className="text-center">Manage your payment details</h2>

                <Formsy.Form onValidSubmit={this.submit} onValid={this.enableButton.bind(this)} onInvalid={this.disableButton.bind(this)}>
                    <DropdownSelect name="address">
                        {addresses}
                    </DropdownSelect>

                    <label>Card Number</label>
                    <input type="text" pattern="[0-9]{13,16}" title="A credit card number" placeholder={activeCard[0].cardNumber}/>
                    
                    <button className="button button__primary">Edit</button>
                </Formsy.Form>
            </div>
        )
    }
}

export default BankDetails;
