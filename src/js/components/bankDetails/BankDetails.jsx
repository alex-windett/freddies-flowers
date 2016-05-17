import React                from 'react'
import Formsy               from 'formsy-react';

import DropdownSelect       from '../forms/DropdownSelect'
import Input                from '../forms/Input'
import CardDetailsInputs    from '../forms/CardDetailsInputs'
import ChangeAddress        from './ChangeAddress'

import GlobalConstant       from '../../constants/GlobalConstants'

import Store                from '../../stores/bankDetailsStore'
import Actions              from '../../actions/bankDetailsActions'


var RegisteredCards = React.createClass({

    getInitialState() {

        return {
            formVisible: 'hide',
            canSubmit: false,
            bankCards: this.props.bankCards,
        }
    },


    enableButton() {
        this.setState({
            canSubmit: true
        })
    },

    disableButton() {
        this.setState({
            canSubmit: false
        })
    },

    submit(model) {
        Actions.newBankCard(model)

        this.refs.newBankCard.reset()
    },

    toggleForm() {
        this.setState({
            formVisible: this.state.formVisible ? '' : 'hide'
        })
    },

    render() {

        const activeCard = this.state.bankCards.filter( c => {
            if ( c.active ) return c
        })

        var str = []
        //Create the "*" for exactly 4 digits short
        for( var i = 1; i <= activeCard[0].cardNumber.length - 4; i++) {
            str += "*"
        }
        //Join the asterisk and last 4 characters
        var ecard = `${str} ${activeCard[0].cardNumber.substr(activeCard[0].cardNumber.length-4)}`

        return (
            <section className="bankdetails clearfix">

                <div className="clearfix">
                    <h3 className="bankdetails__current bankdetails__current--title">Card number</h3>
                    <p className="bankdetails__current bankdetails__current--number">{ecard}</p>

                    <button className="button button__secondary bankdetails__toggle" onClick={this.toggleForm}>Edit</button>
                </div>

                <Formsy.Form
                    ref="newBankCard"
                    className={`${this.state.formVisible} clear bankdetails__form`}
                    onSubmit={this.submit}
                    onValid={this.enableButton}
                    onInvalid={this.disableButton} >

                    <CardDetailsInputs />

                    <button className="button button__secondary" disabled={!this.state.canSubmit}>Edit</button>
                </Formsy.Form>
            </section>
        )
    }
})


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

        return (
            <div className="decoration decoration__paper decoration__tape decoration__tape--left clearfix">
                <h2 className="text-center">Manage your payment details</h2>

                <RegisteredCards bankCards={this.state.bankDetails.cards} />

                <ChangeAddress addresses={this.state.bankDetails.addresses}/>
            </div>
        )
    }
}

export default BankDetails;
