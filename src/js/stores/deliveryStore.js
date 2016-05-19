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
                date: 'Friday 1 September',
                active: true
            },
            {
                id: 2,
                date: 'Friday 2 September',
                active: true
            },
            {
                id: 3,
                date: 'Friday 3 September',
                active: true
            },
            {
                id: 4,
                date: 'Friday 4 September',
                active: true
            },
            {
                id: 5,
                date: 'Friday 5 September',
                active: true
            },
            {
                id: 6,
                date: 'Friday 6 September',
                active: true
            },
            {
                id: 7,
                date: 'Friday 7 September',
                active: true
            },
            {
                id: 8,
                date: 'Friday 8 September',
                active: true
            }
        ]

        this.resultsPerPage     = 5
        this.currentPage        = 1
        this.currentSliceStart  = 0
        this.currentSliceEnd    = 5
        this.maxNumberPages     = Math.ceil(this.deliveries.length / this.resultsPerPage)
    }

    getDeliveries() {
        return this.deliveries
    }

    getCurrentDeliveries() {
        return this.deliveries.slice(this.currentSliceStart, this.currentSliceEnd)
    }

    earlierDeliveries() {
        if ( this.currentPage > 0 ) {
            this.currentSliceStart -= this.resultsPerPage
            this.currentSliceEnd -= this.resultsPerPage
            return this.deliveries.slice(this.currentSliceStart, this.currentSliceEnd)
            this.currentPage--
        }
    }

    laterDeliveries() {
        if ( this.currentPage < this.maxNumberPages ) {
            this.currentSliceStart += this.resultsPerPage
            this.currentSliceEnd += this.resultsPerPage
            return this.deliveries.slice(this.currentSliceStart, this.currentSliceEnd)
            this.currentPage++
        }
    }

    removeDelivery(id) {

        const toEdit = helper.findById(this.deliveries, id)
        toEdit.active = toEdit.active ? false : true
        this.emit(CHANGE_EVENT)
    }

    handleActions(action) {

        switch(action.type) {

            case DeliveryConstant.DELETE_DELIVERY: {
                this.removeDelivery(action.id)
                break
            }

            case DeliveryConstant.EARLIER_DELIVERIES: {
                this.earlierDeliveries()
                break
            }

            case DeliveryConstant.LATER_DELIVERIES: {
                this.laterDeliveries()
                break
            }
        }
    }
}

const deliveryStore = new DeliveryStore;
Dispatcher.register(deliveryStore.handleActions.bind(deliveryStore))

export default deliveryStore
