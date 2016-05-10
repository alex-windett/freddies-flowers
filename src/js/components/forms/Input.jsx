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

        const additionalClasses = this.props.className ? ' ' + this.props.className : ''
        const className         = this.showRequired() ? 'input__required' : this.showError() ? 'input__error' : null

        return (
            <div className={'input' + additionalClasses}>
                <input className={className} type="text" placeholder={this.props.placeholder} onChange={this.changeValue} value={this.getValue()}/>

                {/*<span className="input__error--description">{this.getErrorMessage()}</span>*/}
            </div>
        );
    }
})

export default Input
