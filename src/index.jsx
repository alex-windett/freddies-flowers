import './scss/app'

import React from 'react'
import { render } from 'react-dom'

import AccountDashboard from 'js/accountDashboard'
import Register from 'js/register'

const accountDashboard = document.getElementById('accountDashboard')
const registration     = document.getElementById('registration')

if ( document.contains(accountDashboard) ) {
    ReactDOM.render(
        <AccountDashboard />,
        accountDashboard
    )
}


if ( document.contains(registration) ) {
    ReactDOM.render(
        <Register />,
        registration
    )
}
