import React from 'react'

import Formsy from 'formsy-react'

var Input = React.createClass({

    // Add the Formsy Mixin
    mixins: [Formsy.Mixin],

    // setValue() will set the value of the component, which in
    // turn will validate it and the rest of the form
    changeValue(event) {
        this.setValue(event.currentTarget.value);
    },

    render() {

        const additionalClasses = this.props.className ? ` ${this.props.className}` : ''
        const inputClasses      = this.props.inputClass ? ` ${this.props.inputClass}` : ''
        const validationClassName = this.showRequired() ? 'input__required' : this.showError() ? 'input__error' : ''
        const isValidClassName  = this.isValid() ? 'input__valid' : ''
        const type              = this.props.type ? this.props.type : 'text'
        const children          = this.props.children ? this.props.children : ''

        return (
            <div className={`input ${additionalClasses}`}>
                <input
                    className={`${validationClassName} ${isValidClassName} ${inputClasses}`}
                    type={type}
                    placeholder={this.props.placeholder}
                    onChange={this.changeValue}
                    value={this.getValue()} />

                {children}
                {/*<span className="input__error--description">{this.getErrorMessage()}</span>*/}
            </div>
        );
    }
})

export default Input
