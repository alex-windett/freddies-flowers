var readMore = {

    init() {
        this.homepage()
        this.deliveries()
    },

    homepage() {
        const itermsPerRow      = 3
        const trigger           = $('#pastDeliveriesReadMore')
        const deliveryItem      = $('.pastdelivery__item')

        deliveryItem.slice(0, itermsPerRow).show()
        trigger.on('click', function (e) {
            $(".pastdelivery__item:hidden").slice(0, itermsPerRow).slideDown()

            $('html, body').animate({
                scrollTop: $(this).offset().top
            }, 1500)

            if ( $(".pastdelivery__item:hidden").length <= 0 ) {
                console.log('true')
                trigger.hide()
            }
        })
    },

    deliveries() {
            
    },
}

export default readMore
