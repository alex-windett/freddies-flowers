// Unfortunately no way to import * from directory in JS
// Add all files to list to the be called in init function

import header from './functions/header.js'
import dropkick from './functions/dropdowns.js'
import helpers from './functions/helpers.js'
import readMore from './functions/read-more.js'
import smoothScroll from './functions/smooth-scroll.js'

require('waypoints')

var docReady = {

    init() {
        header.burgerMenu()
        dropkick.init()
        helpers.init()
        readMore.init()
        smoothScroll.init()
    }
}

export default docReady
