const header = {

    init() {
        this.burgerMenu()

        // TODO
        // - Fix why file can't be split into different functions
    },

    burgerMenu() {

        // Sticky nav
        const header            = $('.header__main')
        const stickyClass       = 'header__main--sticky'
        const homeLogo          = $('.homelogo')
        const stickyHomeLogo    = 'homelogo--sticky'

        $(window).scroll(function() {
            if( $(this).scrollTop() > 100 ) {
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

        // Waypoints
        const waypointsArray = Array.from(document.getElementsByClassName('waypoint'))

        waypointsArray.forEach( point => {
            var waypoint = new Waypoint({
                element: point,
                handler: function() {

                    const target = this.element
                    const menuID = target.getAttribute('name')

                    $(`#${menuID}`).find('.item__title').addClass('item__title--active')
                    $(`#${menuID}`).siblings().find('.item__title').removeClass('item__title--active')
                },
                offset: '50%'
            })
        })
    },
}

export default header
