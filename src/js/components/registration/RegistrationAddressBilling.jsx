import React                from 'react'

import Formsy               from 'formsy-react'

import Input                from '../formElements/Input'
import CardDetailsInputs    from '../formElements/CardDetailsInputs'
import BillingAddressInputs from '../formElements/BillingAddressInputs'

import Action               from '../../actions/registerFormsActions'
import Store                from '../../stores/registerFormsStore'

class RegistrationAddressBilling extends React.Component {

    constructor() {
        super()
        this.state = {
            canSubmit: false
        }

        this.enableButton   = this.enableButton.bind(this)
        this.disableButton  = this.disableButton.bind(this)
        this.submit         = this.submit.bind(this)
    }

    enableButton () {

        this.setState({
            canSubmit: true
        });
    }

    disableButton () {

        this.setState({
            canSubmit: false
        });
    }

    submit(model) {

        var data = {
            postcode    : model.postcode,
            address     : `${model.house} ${model.street}`,
            town        : model.town,
            telephone   : model.telephone,
            delivery    : model.delivery,
            cardNumber  : model.cardNumber,
            expiriy     : model.expiriy,
            cardholder  : model.cardholder,
            cvv         : model.cvv,
        }

        this.props.saveValues(data)

        Action.createUser(this.props.fieldValues)
        this.props.nextStep()
    }

    render () {

        return (
            <div className="decoration decoration__plain registration__form">
                <Formsy.Form ref="newAddressForm" className="clearfix registration registration__billing" onSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>

                    <BillingAddressInputs />

                    <p className="clear small text-center">Enter your postocde to find out your delivery day</p>
                    <h3>Your payment details</h3>
                        
                    <CardDetailsInputs />

                    <h3 className="text-center clear">You’ll be charged £20 a week on the morning of your delivery. Don’t worry – you can amend or cancel at any time. No quibbles!</h3>
                    <div className="form--actions text-center">
                        <button className="button button__secondary" onClick={this.props.previousStep}>Back</button>
                        <button type="submit" disabled={!this.state.canSubmit} className="button button__primary" >Finish</button>
                    </div>
                </Formsy.Form>
            </div>
        );
    }

}

RegistrationAddressBilling.propTypes = {
    previousStep: React.PropTypes.func.isRequired,
    nextStep: React.PropTypes.func.isRequired,
    saveValues: React.PropTypes.func.isRequired,
    fieldValues: React.PropTypes.object
}

export default RegistrationAddressBilling
