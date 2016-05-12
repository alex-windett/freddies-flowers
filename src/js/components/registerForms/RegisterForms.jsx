import React from 'react'

import AboutYou from './AboutYou'
import AddressBilling  from './AddressBilling'
import Confirmation  from './Confirmation'
import assign        from 'object-assign'

// TODO:
    // Movoe object into Flux stores
    // Create action for submit i.e fake AJAX
let fieldValues = {
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
        // Send AJAX request here. Proably on submit of second stage of form

        this.nextStep()
    }

    showStep() {
        switch (this.state.step) {
            case 1:
                return {
                    heading: 'About You',
                    element: <AboutYou
                        fieldValues={fieldValues}
                        nextStep={this.nextStep}
                        previousStep={this.previousStep}
                        saveValues={this.saveValues} />,
                }
            case 2:
                return {
                    heading: 'Address & Billing',
                    element: <AddressBilling
                        fieldValues={fieldValues}
                        nextStep={this.nextStep}
                        previousStep={this.previousStep}
                        saveValues={this.saveValues} />,
                }
            case 3:
                return {
                    heading: '',
                    element: <Confirmation
                            fieldValues={fieldValues}
                            previousStep={this.previousStep}
                            submitRegistration={this.submitRegistration} />,
                }
        }
    }

    getCurrentStep(){

    }

    render() {
        let step = this.showStep()

        return (
            <main>
                <h2 className="progress-step">{this.state.step <= 2 ? `${this.state.step }. ${step.heading}` : ''}</h2>

                {step.element}
            </main>
        )
    }
}

export default RegisterForms
