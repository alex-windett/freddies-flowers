import React        from 'react'

import Formsy       from 'formsy-react'

import Input        from '../formElements/Input'

import Store        from '../../stores/deliveryAddressStore'
import Actions      from '../../actions/deliveryAddressActions'

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

const ManageAddressesEditAddress = React.createClass({
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
        Actions.editAddress(model)
        this.refs.editAddressForm.reset();
    },

    render () {

        const postcodeRegex = /^([A-PR-UWYZ0-9][A-HK-Y0-9][AEHMNPRTVXY0-9]?[ABEHMNPRVWXY0-9]? {1,2}[0-9][ABD-HJLN-UW-Z]{2}|GIR 0AA)$/

        const editingAddress = this.props.editingAddress

        return (
            /**
            * TODO: Have placeholder show correct details, will need to adjust object recieved
            */
            <Formsy.Form ref="editAddressForm" className="clearfix" onSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>

                <Input className="clearfix"
                    inputClass="input__left"
                    placeholder={editingAddress.postcode ? editingAddress.postcode : "Postcode"}
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
                    placeholder={editingAddress.address ? editingAddress.address : "Town City"}
                    name="house"
                    validations={{
                        isAlphanumeric: true,
                        isExisty: true
                    }}
                    required/>
                <Input className="input__right"
                    placeholder={editingAddress.address ? editingAddress.address : "Town City"}
                    name="street"
                    validations={{
                        isExisty: true
                    }}
                    required/>
                <Input className="input__left"
                    placeholder={editingAddress.address ? editingAddress.address : "Town City"}
                    name="city"
                    validations={{
                        isAlpha: true,
                        isExisty: true
                    }}
                    required/>

                <div className="form--actions">
                    <p>Enter your postcode to calculate a delivery charge</p>
                    <button type="submit" disabled={!this.state.canSubmit} className="button button__primary" >Submit</button>
                    <button type="button" className="button button__primary" >Cancel</button>
                </div>
            </Formsy.Form>
        );
    }
})

export default ManageAddressesEditAddress
