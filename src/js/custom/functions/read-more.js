var readMore = {

    init() {
        this.homepage()
    },

    homepage() {
        const itermsPerRow      = 3
        const trigger           = $('#pastDeliveriesReadMore')
        const deliveryItem      = $('.pastdelivery__item')
        const deliveryItemHidden = $('.pastdelivery__item:hidden')

        deliveryItem.slice(0, itermsPerRow).show();
        trigger.on('click', function (e) {
            e.preventDefault();
            deliveryItemHidden.slice(0, itermsPerRow).slideDown()

            $('html, body').animate({
                scrollTop: $(this).offset().top
            }, 1500)
        });
    },
}

export default readMore
