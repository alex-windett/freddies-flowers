const dropkick = {

    init() {
        $('.custom-dropdown').dropkick()

        //TOGGLING NESTED ul
        $(".dropdown__link--selected").click(function(e) {
            e.preventDefault()
            $(".dropdown__options--list").toggle();
        });

        //SELECT OPTIONS AND HIDE OPTION AFTER SELECTION
        $(".dropdown__item--link").click(function() {
            var text = $(this).html();

            $(".dropdown__selected--text").html(text);
            $(".dropdown__options--list").hide();
        });


        //HIDE OPTIONS IF CLICKED ANYWHERE ELSE ON PAGE
        $(document).bind('click', function(e) {
            e.preventDefault()
            var $clicked = $(e.target);
            if (! $clicked.parents().hasClass("dropdown"))
                $(".dropdown__options--list").hide();
        });
    }
}

export default dropkick
