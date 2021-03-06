import React                        from 'react'
import assign                       from 'object-assign'

import RegistrationAboutYou         from './RegistrationAboutYou'
import RegistrationAddressBilling   from './RegistrationAddressBilling'
import RegistrationConfirmation     from './RegistrationConfirmation'

// TODO:
    // Movoe object into Flux stores
    // Create action for submit i.e fake AJAX
let fieldValues = {
    id          : null,
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

class Registration extends React.Component {
    constructor(props) {
        super()

        this.nextStep       = this.nextStep.bind(this)
        this.previousStep   = this.previousStep.bind(this)

        this.state = {
            currentStep: 0,
            steps: [
                {
                    name: 'About You'
                },
                {
                    name: 'Address & Billing'
                },
                {
                    name: 'Confirmation'
                },
            ]
        }
    }

    saveValues(field_value) {
        return function() {
            fieldValues = assign({}, fieldValues, field_value)
        }.bind(this)()
    }

    nextStep() {
        this.setState({
            currentStep : this.state.currentStep + 1
        })
    }

    previousStep() {
        this.setState({
            currentStep : this.state.currentStep - 1
        })
    }

    submitRegistration() {
        // Send AJAX request here. Proably on submit of second stage of form

        this.nextStep()
    }

    showStep() {
        switch (this.state.currentStep) {
            case 0:
                return {
                    heading: 'About You',
                    element: <RegistrationAboutYou
                        fieldValues={fieldValues}
                        nextStep={this.nextStep}
                        previousStep={this.previousStep}
                        saveValues={this.saveValues} />,
                }
            case 1:
                return {
                    heading: 'Address & Billing',
                    element: <RegistrationAddressBilling
                        fieldValues={fieldValues}
                        nextStep={this.nextStep}
                        previousStep={this.previousStep}
                        saveValues={this.saveValues} />,
                }
            case 2:
                return {
                    heading: 'Confirmation',
                    element: <RegistrationConfirmation
                            fieldValues={fieldValues}
                            previousStep={this.previousStep}
                            submitRegistration={this.submitRegistration} />,
                }
        }
    }

    render() {
        const currentStep    = this.showStep()
        const progressItem   = this.state.steps.map( (step, index) => {

            const activeClass = index === this.state.currentStep ? 'progress__item--active' : ''

            /* Only show the title for the first two steps */
            if ( index < 2 ) {
                return (
                    /* Add + 1 to the index as state array starts at 0 */
                    <li className={`progress__item ${activeClass}`} key={index}>
                        <h2 className="progress__item--header">{index + 1}.<span className="progress__item--title">{step.name}</span></h2>
                    </li>
                )
            }
        })

        return (

            <article className="registration__wrapper">
                <nav className="progress">
                    <ul className="progress__list">
                        {progressItem}
                    </ul>
                </nav>

                {currentStep.element}
            </article>
        )
    }
}

export default Registration
