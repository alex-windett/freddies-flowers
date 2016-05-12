import React from 'react'

import Formsy from 'formsy-react'
import Input from '../forms/Input'

class AddressBilling extends React.Component {

    constructor() {
        super()
        this.state = {
            canSubmit: false
        }

        this.enableButton   = this.enableButton.bind(this)
        this.disableButton  = this.disableButton.bind(this)
        this.nextStep       = this.nextStep.bind(this)
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

    nextStep(model) {
        
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
        this.props.nextStep()
    }

    render () {

        return (
            <Formsy.Form ref="newAddressForm" className="clearfix" onSubmit={this.nextStep} onValid={this.enableButton} onInvalid={this.disableButton}>

                <Input className="clearfix input__left"
                    placeholder="Postcode"
                    name="postcode"
                    validations={{
                        isExisty: true
                    }} >
                </Input>

                <Input className="input__right"
                    placeholder="House Number"
                    name="house"
                    validations={{
                        isExisty: true
                    }} />
                <Input className="input__left"
                    placeholder="Street Name"
                    name="street"
                    validations={{
                        isExisty: true
                    }} />
                <Input className="input__right"
                    value={this.props.fieldValues.telephone}
                    placeholder="Phone Number"
                    name="telephone"
                    validations={{
                        isExisty: true
                    }} />
                <Input className="input__left"
                    placeholder="Town or City"
                    name="town"
                    validations={{
                        isExisty: true
                    }} />

                <Input className="input__left"
                    placeholder="Delivery Instructions"
                    name="delivery" />

                <h3 className="clear">Your payment details</h3>

                <Input className="clearfix input__left"
                    placeholder="The Long Number"
                    name="cardNumber"
                    validations={{
                        isExisty: true
                    }} >
                </Input>

                <Input className="input__right"
                    placeholder="Expiry (MM/YY)"
                    name="expiriy"
                    validations={{
                        isExisty: true
                    }} />
                <Input className="input__left"
                    placeholder="Cardholder's name"
                    name="cardholder"
                    validations={{
                        isExisty: true
                    }} />
                <Input className="input__right"
                    placeholder="CVV"
                    name="cvv"
                    validations={{
                        isExisty: true
                    }} />

                <div className="form--actions">
                    {/*<button type="submit" disabled={!this.state.canSubmit} className="button button__primary" >Next</button>*/}
                    <button type="submit" className="button button__primary" >Next</button>
                </div>
            </Formsy.Form>
        );
    }

}

export default AddressBilling
