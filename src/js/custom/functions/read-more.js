var readMore = {

    init() {
        this.homepage()
        // this.deliveries()
    },

    homepage() {
        const itemsPerRow      = 3
        const trigger           = $('#pastDeliveriesReadMore')
        const deliveryItem      = $('.pastdelivery__item')

        deliveryItem.slice(0, itemsPerRow).show()
        trigger.on('click', function (e) {
            $(".pastdelivery__item:hidden").slice(0, itemsPerRow).slideDown()

            $('html, body').animate({
                scrollTop: $(this).offset().top
            }, 1500)

            if ( $(".pastdelivery__item:hidden").length <= 0 ) {
                trigger.hide()
            }
        })
    },

    deliveries() {
        const initialShown  = 5
        let currentShown    = initialShown
        const deliveries    = $('.deliveries')
        const delivery      = deliveries.find('.delivery')
        const earlierTrigger        = deliveries.find('.deliveries__more--earlier')
        const laterTrigger        = deliveries.find('.deliveries__more--later')

        delivery.hide()
        delivery.slice(0, initialShown).show()

        earlierTrigger.on('click', function (e) {
            let currentShown = currentShown + initialShown
            $(".delivery").slice(0, currentShown).hide()
            $(".delivery:hidden").slice(currentShown, initialShown).show()

            if ( $(".delivery:hidden").length <= 0 ) {
                trigger.hide()
            }
        })
    }
}

export default readMore
