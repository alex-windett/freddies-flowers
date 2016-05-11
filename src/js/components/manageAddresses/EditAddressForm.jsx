import React from 'react'

import Formsy from 'formsy-react'

import Input from '../forms/input'

import Store from '../../stores/deliveryAddressStore'
import Actions from '../../actions/deliveryAddressActions'

var ReadOnlyInput = React.createClass({

    // Add the Formsy Mixin
    mixins: [Formsy.Mixin],


    render() {
        const additionalClasses = this.props.className ? ' ' + this.props.className : ''
        const className         = this.showRequired() ? 'input__required' : this.showError() ? 'input__error' : null

        return (
            <div className={'input' + additionalClasses}>
                <input
                    className={className}
                    type="text"
                    value={this.getValue()}
                    readOnly />
            </div>
        )
    }
})

const EditAddressForm = React.createClass({
    // https://github.com/christianalfoni/formsy-react/blob/master/API.md#validators
    // https://github.com/christianalfoni/formsy-react

    getInitialState () {
        return {
            canSubmit: false
        }
    },

    enableButton () {
        console.log('able to submit')
        this.setState({
            canSubmit: true
        });
    },

    disableButton () {
        console.log('unable to submit')
        this.setState({
            canSubmit: false
        });
    },

    submit(model){
        /**
        * @param {model} contains the fields and their value of submitted form
        */
        Actions.editAddress(model)
        this.refs.editAddressForm.reset();
    },

    render () {

        const postcodeRegex = /^([A-PR-UWYZ0-9][A-HK-Y0-9][AEHMNPRTVXY0-9]?[ABEHMNPRVWXY0-9]? {1,2}[0-9][ABD-HJLN-UW-Z]{2}|GIR 0AA)$/

        const editingAddress = this.props.editingAddress

        return (
            <Formsy.Form ref="editAddressForm" className="clearfix" onSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>

                <ReadOnlyInput className="input__right"
                    value={ editingAddress ? editingAddress.id : '' }
                    name="id" />

                <Input className="input__left"
                    placeholder={ editingAddress ? editingAddress.postcode : "Postcode"}
                    name="postcode"
                    validations={{
                        minLength: 4,
                        maxLength: 6,
                        isExisty: true
                    }}
                    validationError="This is not a valid postcode"
                    required/>
                <button className="button button__secondary float-left">Find Address</button>

                <Input className="input__left"
                    placeholder= { editingAddress ? editingAddress.address : "House Number or Name"}
                    name="house"
                    validations={{
                        isAlphanumeric: true,
                        isExisty: true
                    }}
                    required/>
                <Input className="input__left"
                    placeholder={ editingAddress ? editingAddress.address : "Street Name"}
                    name="street"
                    validations={{
                        isExisty: true
                    }}
                    required/>
                <Input className="input__right"
                    placeholder={ editingAddress ? editingAddress.address : "Town City"}
                    name="city"
                    validations={{
                        isAlpha: true,
                        isExisty: true
                    }}
                    required/>

                <button type="submit"  disabled={!this.state.canSubmit} className="button button__primary" >Submit</button>
            </Formsy.Form>
        );
    }
})

export default EditAddressForm
