import React                    from 'react'
import Formsy                   from 'formsy-react'

import DropdownSelect           from '../formElements/DropdownSelect'
import BillingAddressInputs     from '../formElements/BillingAddressInputs'

import Actions                  from '../../actions/bankDetailsActions'

class BankDetailsChangeAddress extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            canSelectSubmit: false,
            canFormSubmit: false,
            newAddressVisible: 'hide',
        }
    }

    componentDidMount() {
        this.onSelectChange()
    }

    onSelectChange() {
        const dropdownSelect    = $('.bankdetails__address select')
        const options           = dropdownSelect.children()
        const addAddressOption  = dropdownSelect.find('option:last-child')
        let selected            = dropdownSelect.find(':selected')

        if ( selected.val() === addAddressOption.val() ) {
            this.setState({
                newAddressVisible: '',
                canSelectSubmit: false,
            })
        } else {
            this.setState({
                newAddressVisible: 'hide',
                canSelectSubmit: true,
            })
        }
    }

    enableFormButton () {
        this.setState({
            canFormSubmit: true
        });
    }

    disableFormButton () {
        this.setState({
            canFormSubmit: false
        });
    }

    selectSubmit(model) {
        Actions.editAddress(model)
    }

    formSubmit(model) {
        Actions.newBankAddress(model)
        this.refs.newBankAddressForm.reset()
    }

    render() {

        const addresses = this.props.addresses.map( address => {
            return (
                // TODO: `selected='true'` throws error in React, but still works
                <option
                    selected={address.active}
                    value={address.id}
                    key={address.id} >
                    {address.address}
                </option>
             )
        })

        return (
            <div>
                <Formsy.Form
                    refs="bankAddressForm"
                    className="bankdetails bankdetails__address"
                    onChange={this.onSelectChange.bind(this)}
                    onSubmit={this.selectSubmit} >
                    <h3 className="bankdetails__address bankdetails__address--title clear">Billing Address</h3>

                    <DropdownSelect name="address" >
                        {addresses}
                        <option onClick={this.newAddress} value="newAddress">Add a new address...</option>
                    </DropdownSelect>

                    <button
                        className="button button__secondary bankdetails__submit"
                        disabled={!this.state.canSelectSubmit}>
                        Edit
                    </button>

                </Formsy.Form>

                <Formsy.Form
                    ref="newBankAddressForm"
                    className="clear"
                    onSubmit={this.formSubmit.bind(this)}
                    onValid={this.enableFormButton.bind(this)}
                    onInvalid={this.disableFormButton.bind(this)}>

                    <section className={`${this.state.newAddressVisible} clearfix`}>
                        <BillingAddressInputs className="hide"/>

                        <button
                            className="button button__secondary"
                            disabled={!this.state.canFormSubmit}>
                            Add
                        </button>
                    </section>

                </Formsy.Form>
            </div>
        )
    }
}


BankDetailsChangeAddress.propTypes = {
    addresses: React.PropTypes.array.isRequired
}

export default BankDetailsChangeAddress
