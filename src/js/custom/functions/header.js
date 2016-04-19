import $ from 'jquery'

const header = {

    init() {
        this.burgerMenu();
    },

    burgerMenu() {
        $('#burgerMenu').on('click', e => {
            e.preventDefault
            $('#burgerMenuItems').slideToggle()
        })
    }
}

export default header
