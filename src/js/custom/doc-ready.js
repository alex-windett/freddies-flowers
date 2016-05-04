import header from './functions/header.js'
import dropkick from './functions/dropdowns.js'
import helpers from './functions/helpers.js'

import $ from 'jquery'

var docReady = {

    init() {
        header.burgerMenu()
        dropkick.init()
        helpers.init()
    }
}

export default docReady
