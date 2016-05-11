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
        const validationClassName = this.showRequired() ? 'input__required' : this.showError() ? 'input__error' : ''
        const isValidClassName  = this.isValid() ? 'input__valid' : ''
        // const isValidClassName  = ''
        const type              = this.props.type ? this.props.type : 'text'

        return (
            <div className={`input ${additionalClasses}`}>
                <input
                    className={`${validationClassName} ${isValidClassName}`}
                    type={type}
                    placeholder={this.props.placeholder}
                    onChange={this.changeValue}
                    value={this.getValue()} />

                {/*<span className="input__error--description">{this.getErrorMessage()}</span>*/}
            </div>
        );
    }
})

export default Input
