import header from './functions/header.js'
import dropkick from './functions/dropdowns.js'

import $ from 'jquery'

var docReady = {

    init() {
        header.burgerMenu()
        dropkick.init()
    }
}

export default docReady
