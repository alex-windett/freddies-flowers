const header = {

    init() {
        this.burgerMenu()
        this.stickyNav()
    },

    burgerMenu() {
        const header            = $('.header__main')
        const stickyClass       = 'header__main--sticky'
        const homeLogo          = $('.homelogo')
        const stickyHomeLogo    = 'homelogo--sticky'

        $(window).scroll(function() {
            if( $(this).scrollTop() > 0 ) {
                header.addClass(stickyClass)
                homeLogo.addClass(stickyHomeLogo)
            } else {
                header.removeClass(stickyClass)
                homeLogo.removeClass(stickyHomeLogo)
            }
        })

        $('#burgerMenu').on('click', e => {
            e.preventDefault
            $('#burgerMenuItems').slideToggle()
        })
    },

    stickyNav() {

    },
}

export default header
