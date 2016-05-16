import React from 'react'
import Input from './Input'
import Formsy from 'formsy-react'

var CardDetailsInputs = React.createClass({

    render() {

        return (
            
            <div>
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
            </div>
        )
    }
})

export default CardDetailsInputs
