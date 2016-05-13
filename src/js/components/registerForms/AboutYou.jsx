import React from 'react'

import Formsy from 'formsy-react'
import Input from '../forms/Input'

class AboutYou extends React.Component {

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
            id          : Date.now(),
            firstName   : model.firstName,
            lastName    : model.lastName,
            email       : model.email,
            password    : model.password,
            telephone   : model.telephone,
            code        : model.code ? model.code : '',
        }

        this.props.saveValues(data)
        this.props.nextStep()
    }

    render () {

        return (
            <div className="decoration decoration__plain registration__form">
                <Formsy.Form
                    ref="newAddressForm"
                    className="clearfix registration__about"
                    onSubmit={this.nextStep}
                    onValid={this.enableButton}
                    onInvalid={this.disableButton} >

                    <Input className="clearfix input__left"
                        placeholder="First Name"
                        name="firstName"
                        defaultValue={this.props.fieldValues.firstName}
                        validations={{
                            isExisty: true
                        }} >
                    </Input>

                    <Input className="input__right"
                        placeholder="Last Name"
                        name="lastName"
                        defaultValue={this.props.fieldValues.lastName}
                        validations={{
                            isExisty: true
                        }} />
                    <Input className="input__left"
                        placeholder="Email"
                        name="email"
                        defaultValue={this.props.fieldValues.email}
                        validations={{
                            isExisty: true
                        }} />
                    <Input className="input__right"
                        placeholder="Phone Number"
                        name="telephone"
                        defaultValue={this.props.fieldValues.telephone}
                        validations={{
                            isExisty: true
                        }} />
                    <Input className="input__left"
                        placeholder="Create Password"
                        name="password"
                        defaultValue={this.props.fieldValues.password}
                        validations={{
                            isExisty: true
                        }} />

                    <div className="referal clear">
                        <p className="input__right referal__info small">If you have an invitation code, just pop it in here </p>

                        <Input className="input__left referal__input"
                            placeholder="Referal Code"
                            defaultValue={this.props.fieldValues.code}
                            name="code" />
                    </div>

                    <div className="form--actions clear">
                        <button type="submit" disabled={!this.state.canSubmit} className="button button__primary" >Next</button>
                    </div>
                </Formsy.Form>
            </div>
        );
    }
}

export default AboutYou
