import EventEmitter from 'events'
import Dispatcher from '../dispatcher'
import Constant from '../constants/DeliveryAddressConstants'

const CHANGE_EVENT = 'change'

class DeliveryStore extends EventEmitter {

    constructor() {
        super();
    }

    cancelDelivery(state) {

        this.emit(CHANGE_EVENT)
    }

    handleActions(action) {

        switch(action.type) {

            case Constant.DELETE_DELIVERY: {
                this.cancelDelivery(action.state)
                break
            }
        }
    }

}

const deliveryStore = new DeliveryStore;
Dispatcher.register(deliveryStore.handleActions.bind(deliveryStore))

export default DeliveryStore
