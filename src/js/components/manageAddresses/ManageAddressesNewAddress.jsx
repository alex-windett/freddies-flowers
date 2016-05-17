import React        from 'react'

import Formsy       from 'formsy-react'

import Input        from '../formElements/Input'

import Store        from '../../stores/deliveryAddressStore'
import Actions      from '../../actions/deliveryAddressActions'

const ManageAddressesNewAddress = React.createClass({
    // https://github.com/christianalfoni/formsy-react/blob/master/API.md#validators
    // https://github.com/christianalfoni/formsy-react

    getInitialState () {
        return {
            canSubmit: false
        }
    },

    enableButton () {
        this.setState({
            canSubmit: true
        });
    },

    disableButton () {
        this.setState({
            canSubmit: false
        });
    },

    submit(model){
        /**
        * @param {model} contains the fields and their value of submitted form
        */
        Actions.addAddress(model)
        this.refs.newAddressForm.reset()
    },

    render () {
        const postcodeRegex = /^([A-PR-UWYZ0-9][A-HK-Y0-9][AEHMNPRTVXY0-9]?[ABEHMNPRVWXY0-9]? {1,2}[0-9][ABD-HJLN-UW-Z]{2}|GIR 0AA)$/

        return (
            <Formsy.Form ref="newAddressForm" className="clearfix" onSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>

                <Input className="clearfix"
                    inputClass="input__left"
                    placeholder="Postcode"
                    name="postcode"
                    validations={{
                        minLength: 4,
                        maxLength: 6,
                        isExisty: true
                    }}
                    validationError="This is not a valid postcode"
                    required >
                    <button className="button button__secondary find-address">Find Address</button>
                </Input>

                <Input className="input__left"
                    placeholder="House Number or Name"
                    name="house"
                    validations={{
                        isAlphanumeric: true,
                        isExisty: true
                    }}
                    required/>
                <Input className="input__right"
                    placeholder="Street Name"
                    name="street"
                    validations={{
                        isExisty: true
                    }}
                    required/>
                <Input className="input__left"
                    placeholder="Town City"
                    name="city"
                    validations={{
                        isAlpha: true,
                        isExisty: true
                    }}
                    required/>

                <div className="form--actions">
                    <p>Enter your postcode to calculate a delivery charge</p>
                    <button type="submit" disabled={!this.state.canSubmit} className="button button__primary" >Submit</button>
                    <button type="button" className="button button__primary">Cancel</button>
                </div>
            </Formsy.Form>
        );
    }
})

export default ManageAddressesNewAddress
