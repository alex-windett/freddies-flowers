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
            <Formsy.Form ref="newAddressForm" className="clearfix registration registration__about" onSubmit={this.nextStep} onValid={this.enableButton} onInvalid={this.disableButton}>

                <Input className="clearfix input__left"
                    placeholder="First Name"
                    name="firstName"
                    validations={{
                        isExisty: true
                    }} >
                </Input>

                <Input className="input__right"
                    placeholder="Last Name"
                    name="lastName"
                    validations={{
                        isExisty: true
                    }} />
                <Input className="input__left"
                    placeholder="Email"
                    name="email"
                    validations={{
                        isExisty: true
                    }} />
                <Input className="input__right"
                    placeholder="Phone Number"
                    name="telephone"
                    validations={{
                        isExisty: true
                    }} />
                <Input className="input__left"
                    placeholder="Create Password"
                    name="password"
                    validations={{
                        isExisty: true
                    }} />

                <Input className="input__left"
                    placeholder="Referal Code"
                    name="code" />

                <div className="form--actions">
                    {/*<button type="submit" disabled={!this.state.canSubmit} className="button button__primary" >Next</button>*/}
                    <button type="submit"  className="button button__primary" >Next</button>
                </div>
            </Formsy.Form>
        );
    }
}

export default AboutYou
