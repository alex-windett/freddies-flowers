const header = {

    init() {
        this.burgerMenu();
        this.cloneUseraccess();
    },

    burgerMenu() {
        $('#burgerMenu').on('click', e => {
            e.preventDefault
            $('#burgerMenuItems').slideToggle()
        })
    },
}

export default header
