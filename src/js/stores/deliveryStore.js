import EventEmitter from 'events'
import Dispatcher from '../dispatcher'
import DeliveryConstant from '../constants/DeliveryConstants'

import helper from '../helpers'

const CHANGE_EVENT = 'change'

class DeliveryStore extends EventEmitter {

    constructor() {
        super();

        this.deliveries = [
            {
                id: 1,
                date: 'Friday 4 September',
                active: true
            },
            {
                id: 2,
                date: 'Friday 4 September',
                active: true
            },
            {
                id: 3,
                date: 'Friday 4 September',
                active: true
            },
            {
                id: 4,
                date: 'Friday 4 September',
                active: true
            },
            {
                id: 5,
                date: 'Friday 4 September',
                active: true
            },
            {
                id: 6,
                date: 'Friday 4 September',
                active: true
            },
            {
                id: 7,
                date: 'Friday 4 September',
                active: true
            },
            {
                id: 8,
                date: 'Friday 4 September',
                active: true
            }
        ]
    }

    getDeliveries() {
        return this.deliveries
    }

    removeDelivery(id) {

        const toEdit = helper.findById(this.deliveries, id)
        toEdit.active = toEdit.active ? false : true
        console.log(this.deliveries)
        this.emit(CHANGE_EVENT)
    }

    handleActions(action) {

        switch(action.type) {

            case DeliveryConstant.DELETE_DELIVERY: {
                this.removeDelivery(action.id)
                break
            }
        }
    }
}

const deliveryStore = new DeliveryStore;
Dispatcher.register(deliveryStore.handleActions.bind(deliveryStore))

export default deliveryStore
