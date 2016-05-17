import React from 'react'
import Formsy from 'formsy-react'
import DropdownSelect from '../forms/DropdownSelect'

class ChangeAddress extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            canSubmit: false,
        }
    }

    enableButton() {
        this.setState({
            canSubmit: true
        })
    }

    submit(model) {
        Actions.editAddress(model)
    }

    render() {

        const addresses = this.props.addresses.map( a => {

            return <option data-key={a.id} key={a.id}>{a.address}</option>
        })

        return (
            <Formsy.Form
                refs="bankAddressForm"
                className="bankdetails bankdetails__address"
                onChange={this.enableButton.bind(this)}
                onSubmit={this.submit} >
                <h3 className="bankdetails__address bankdetails__address--title clear">Billing Address</h3>

                <DropdownSelect name="address">
                    {addresses}
                    <option>Add a new address...</option>
                </DropdownSelect>

                <button
                    className="button button__secondary bankdetails__submit"
                    disabled={!this.state.canSubmit}>
                    Edit
                </button>

            </Formsy.Form>
        )
    }
}

export default ChangeAddress
