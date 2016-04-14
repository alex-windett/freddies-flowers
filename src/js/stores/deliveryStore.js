import EventEmitter from 'events'
import Dispatcher from '../dispatcher'
import DeliveryConstant from '../constants/DeliveryConstants'

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
            }
        ]
    }

    getDeliveries() {
        return this.deliveries
    }

    removeDelivery(id) {

        const toEdit = this.deliveries.filter( obj => {
            return obj.id == id
        })

        let isActive = toEdit[0].active ? false : true

        toEdit[0].active = isActive

        this.emit(CHANGE_EVENT)

        console.log(this.deliveries)
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
