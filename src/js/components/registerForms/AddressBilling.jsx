import React from 'react'

import Formsy from 'formsy-react'
import Action from '../../actions/registerFormsActions'
import Store from '../../stores/registerFormsStore'
import Input from '../forms/Input'

class AddressBilling extends React.Component {

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

        const completeUserData = this.props.fieldValues
        Action.createUser(completeUserData)
        this.props.nextStep()
    }

    render () {

        const buttonAdditionalStyle = {
            marginBottom: "16px"
        }

        return (
            <div className="decoration decoration__plain registration__form">
                <Formsy.Form ref="newAddressForm" className="clearfix registration registration__billing" onSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>

                    <Input className="clearfix input__left"
                        placeholder="Postcode"
                        name="postcode"
                        validations={{
                            isExisty: true
                        }} >
                    </Input>

                    <button style={buttonAdditionalStyle} className="button button__secondary input__right">Find Address</button>
                    <br />

                    <Input className="input__left"
                        placeholder="House Number"
                        name="house"
                        validations={{
                            isExisty: true
                        }} />
                    <Input className="input__right"
                        placeholder="Street Name"
                        name="street"
                        validations={{
                            isExisty: true
                        }} />
                    <Input className="input__left"
                        placeholder="Town or City"
                        name="town"
                        validations={{
                            isExisty: true
                        }} />

                    <Input className="input__right"
                        placeholder="Delivery Instructions"
                        name="delivery" />

                    <p className="clear small text-center">Enter your postocde to find out your delivery day</p>
                    <h3>Your payment details</h3>

                    <Input className="clearfix input__left input__left--large"
                        placeholder="The Long Number"
                        name="cardNumber"
                        validations={{
                            isExisty: true
                        }} >
                    </Input>

                    <Input className="input__right input__right--small"
                        placeholder="Expiry (MM/YY)"
                        name="expiriy"
                        validations={{
                            isExisty: true
                        }} />
                    <Input className="input__left input__left--large"
                        placeholder="Cardholder's name"
                        name="cardholder"
                        validations={{
                            isExisty: true
                        }} />
                    <Input className="input__right input__right--small"
                        placeholder="CVV"
                        name="cvv"
                        validations={{
                            isExisty: true
                        }} />

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

export default AddressBilling
