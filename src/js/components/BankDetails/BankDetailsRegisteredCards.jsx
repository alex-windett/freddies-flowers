import React                    from 'react'
import Formsy                   from 'formsy-react';

import DropdownSelect           from '../formElements/DropdownSelect'
import CardDetailsInputs        from '../formElements/CardDetailsInputs'

import Actions                  from '../../actions/bankDetailsActions'

class BankDetailsRegisteredCards extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            formVisible: 'hide',
            canSubmit: false,
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

    submit(model) {
        Actions.newBankCard(model)

        this.refs.newBankCard.reset()
    }

    toggleForm() {
        this.setState({
            formVisible: this.state.formVisible ? '' : 'hide'
        })
    }

    render() {

        const activeCard = this.props.bankCards.filter( c => {
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

                    <button className="button button__secondary bankdetails__toggle" onClick={this.toggleForm.bind(this)}>Edit</button>
                </div>

                <Formsy.Form
                    ref="newBankCard"
                    className={`${this.state.formVisible} clear bankdetails__form`}
                    onSubmit={this.submit.bind(this)}
                    onValid={this.enableButton.bind(this)}
                    onInvalid={this.disableButton.bind(this)} >

                    <CardDetailsInputs />

                    <button className="button button__secondary" disabled={!this.state.canSubmit}>Edit</button>
                </Formsy.Form>
            </section>
        )
    }
}

BankDetailsRegisteredCards.propTypes = {
    bankCards: React.PropTypes.array.isRequired
}

export default BankDetailsRegisteredCards
