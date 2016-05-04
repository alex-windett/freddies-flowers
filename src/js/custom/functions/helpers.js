const helpers = {

    init() {
        this.removeLink();
    },

    removeLink() {
        $('.no-link').on('click', e => {
            e.preventDefault()
        })
    },
}

export default helpers
