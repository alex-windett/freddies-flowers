const helpers = {

    /**
    * @param source - array of bojects to filter through
    * @param id     - the ID of the item to be returned
    *
    * Returns object in array where ID's match
    */
    findById(source, id) {
        for (var i = 0; i < source.length; i++) {
            if (source[i].id === id) {
                return source[i]
            }
        }
        throw `Couldn't find object with id: ${id}`
    }
}

export default helpers
