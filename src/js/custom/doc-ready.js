require('waypoints')

// Unfortunately no way to import * from directory in JS
// Add all files to list to the be called in init function
import header from './functions/header'
import dropkick from './functions/dropdowns'
import helpers from './functions/helpers'
import readMore from './functions/read-more'
import smoothScroll from './functions/smooth-scroll'

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
