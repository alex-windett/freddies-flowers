const helpers = {

    findById(source, id) {
        for (var i = 0; i < source.length; i++) {
            if (source[i].id === id) {
                return source[i]
            }
        }
        throw "Couldn't find object with id: " + id
    }
}

export default helpers
