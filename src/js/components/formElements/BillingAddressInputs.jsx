import React        from 'react'

import Formsy       from 'formsy-react'
import Input        from './Input'

class BillingAddressInputs extends React.Component {

    constructor() {
        super()
    }

    render() {

        const buttonAdditionalStyle = {
            marginBottom: "16px"
        }

        return (
            <div>
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
            </div>
        )
    }
}

export default BillingAddressInputs
