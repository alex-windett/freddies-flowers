import React from 'react'
import Formsy from 'formsy-react'

const DropdownSelect = React.createClass({

    // Add the Formsy Mixin
    mixins: [Formsy.Mixin],

    // setValue() will set the value of the component, which in
    // turn will validate it and the rest of the form
    changeValue(event) {
        this.setValue(event.currentTarget.value)
    },

    render() {

        return (
            <select className="dropdown">
                {this.props.children}
            </select>
        )
    }
})

export default DropdownSelect
