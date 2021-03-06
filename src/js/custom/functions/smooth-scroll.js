var smoothScroll = {

    init() {
        $('a[href*="#"]:not([href="#"])').click(function() {
            if ( location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') &&
                 location.hostname == this.hostname ) {

                let target  = $(this.hash)
                    target  =  $( `[name='${this.hash.slice(1)}']`  )

                if (target.length) {
                    $('html, body').animate({

                        // 300 compensates for the sticky nav
                        scrollTop: target.offset().top - 300
                    }, 1000);
                    return false;
                }
            }
        })
    }
}

export default smoothScroll
