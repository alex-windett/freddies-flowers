import React from 'react'
import ReactDOM from 'react-dom'

import Formsy from 'formsy-react'

import Store from '../../stores/deliveryAddressStore'
import Actions from '../../actions/deliveryAddressActions'

var Input = React.createClass({

    // Add the Formsy Mixin
    mixins: [Formsy.Mixin],

    // setValue() will set the value of the component, which in
    // turn will validate it and the rest of the form
    changeValue: function (event) {
        this.setValue(event.currentTarget.value);
    },
    render: function () {
        var className = this.showRequired() ? 'input__required' : this.showError() ? 'input__error' : null;

        return (
            <div className="input">
                <input className={className} type="text" placeholder={this.props.placeholder} onChange={this.changeValue} value={this.getValue()}/>

                <span className="input__error--description">{this.getErrorMessage()}</span>
            </div>
        );
    }
});

const MyAppForm = React.createClass({
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
    submit (model){


    },
    render () {
        return (
            <Formsy.Form onSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
                <Input placeholder="Email Address"
                    name="email"
                    validations={{
                        isEmail: true,
                        isExisty: true
                    }}
                    validationError="This is not a valid email"
                    required/>
                <button type="submit"  disabled={!this.state.canSubmit} className="button button__primary" >Submit</button>
            </Formsy.Form>
        );
    }
})

class Form extends React.Component {

    constructor() {
        super()
    }

    render() {
        return (

            <MyAppForm />
        )
    }
}

export default MyAppForm
