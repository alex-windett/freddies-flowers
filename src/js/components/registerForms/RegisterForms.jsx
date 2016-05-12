import React from 'react'

import Action from '../../actions/registerFormsActions'
import Store from '../../stores/registerFormsStore'
import Constant from '../../constants/registerFormsConstants'
import Helper from '../../helpers'

import AboutYou from './AboutYou'
import AddressBilling  from './AddressBilling'
import Confirmation  from './Confirmation'
import assign        from 'object-assign'

// Idealy, these form values would be saved in another
// sort of persistence, like a Store via Flux pattern
var fieldValues = {
    firstName   : null,
    lastName    : null,
    email       : null,
    password    : null,
    telephone   : null,
    code        : null,
    postcode    : null,
    address     : null,
    town        : null,
    delivery    : null,
    cardNumber  : null,
    expiriy     : null,
    cardholder  : null,
    cvv         : null,
}

class RegisterForms extends React.Component {

    constructor(props) {
        super()

        this.nextStep       = this.nextStep.bind(this)
        this.previousStep   = this.previousStep.bind(this)

        this.state = {
            step: 1
        }
    }

    saveValues(field_value) {
        return function() {
            fieldValues = assign({}, fieldValues, field_value)
        }.bind(this)()
    }

    nextStep() {
        this.setState({
            step : this.state.step + 1
        })
    }

    previousStep() {
        this.setState({
            step : this.state.step - 1
        })
    }

    submitRegistration() {
        // Handle via ajax submitting the user data, upon
        // success return this.nextStop(). If it fails,
        // show the user the error but don't advance

        this.nextStep()
    }

    showStep() {
        switch (this.state.step) {
            case 1:
            return <AboutYou fieldValues={fieldValues}
                nextStep={this.nextStep}
                previousStep={this.previousStep}
                saveValues={this.saveValues} />
            case 2:
            return <AddressBilling fieldValues={fieldValues}
                nextStep={this.nextStep}
                previousStep={this.previousStep}
                saveValues={this.saveValues} />
            case 3:
            return <Confirmation fieldValues={fieldValues}
                previousStep={this.previousStep}
                submitRegistration={this.submitRegistration} />
        }
    }


    render() {

        return (
            <main>
                <span className="progress-step">Step {this.state.step}</span>

                {this.showStep()}
            </main>
        )
    }
}

export default RegisterForms
