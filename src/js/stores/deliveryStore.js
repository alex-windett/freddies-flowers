import EventEmitter from 'events'
import Dispatcher from '../dispatcher'
import DeliveryConstant from '../constants/DeliveryConstants'

const CHANGE_EVENT = 'change'

class DeliveryStore extends EventEmitter {

    constructor() {
        super();
    }

    cancelDelivery(state) {

        console.log('delivery canceled')

        this.emit(CHANGE_EVENT)
    }

    handleActions(action) {

        switch(action.type) {

            case DeliveryConstant.DELETE_DELIVERY: {
                this.cancelDelivery()
                break
            }
        }
    }
}

const deliveryStore = new DeliveryStore;
Dispatcher.register(deliveryStore.handleActions.bind(deliveryStore))

export default DeliveryStore
