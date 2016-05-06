import header from './functions/header.js'
import dropkick from './functions/dropdowns.js'
import helpers from './functions/helpers.js'
import readMore from './functions/read-more.js'
import smoothScroll from './functions/smooth-scroll.js'

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
