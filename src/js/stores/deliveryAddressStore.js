import EventEmitter from 'events'
import Dispatcher from '../dispatcher'
import Constant from '../constants/DeliveryAddressConstants'

const CHANGE_EVENT = 'change'

class DeliverAddressStore extends EventEmitter {

    constructor() {
        super();
    }

    editAddress() {
        /**
        * Edit the delivery address
        */
        debugger

        this.emit(CHANGE_EVENT)
    }

    deleteAddress() {
        /**
        * Edit the delivery address
        */
        debugger

        this.emit(CHANGE_EVENT)
    }

    handleActions(action) {

        switch(action.type) {

            case Constant.EDIT_ADDRESS: {
                this.editAddress()
                break
            }

            case Constant.DELETE_ADDRESS: {
                this.deleteAddress()
                break
            }
        }
    }

}

const deliveryAddressStore = new DeliverAddressStore;
Dispatcher.register(deliveryAddressStore.handleActions.bind(deliveryAddressStore))

export default DeliverAddressStore
