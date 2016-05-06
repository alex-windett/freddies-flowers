import header from './functions/header.js'
import dropkick from './functions/dropdowns.js'
import helpers from './functions/helpers.js'
import readMore from './functions/read-more.js'

var docReady = {

    init() {
        header.burgerMenu()
        dropkick.init()
        helpers.init()
        readMore.init()
    }
}

export default docReady
