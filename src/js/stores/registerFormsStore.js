import EventEmitter from 'events'
import Dispatcher from '../dispatcher'

import registerFormsConstant from '../constants/registerFormsConstants'

class RegistrationStore extends EventEmitter {

    constructor() {
        super()
    }

    createUser(user) {
        alert (`User ${user.firstName} created`)
        // Do something with ajax to create a new user
    }

    handleActions(action) {

        switch(action.type) {

            case registerFormsConstant.CREATE_USER: {
                this.createUser(action.user)
                break
            }
        }
    }

}

const registrationStore = new RegistrationStore;
Dispatcher.register(registrationStore.handleActions.bind(registrationStore))

export default registrationStore
