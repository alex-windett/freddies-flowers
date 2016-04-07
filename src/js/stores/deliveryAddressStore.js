import EventEmitter from 'events'
import Dispatcher from '../dispatcher'
import AddressConstant from '../constants/DeliveryAddressConstants'

const CHANGE_EVENT = 'change'

class DeliverAddressStore extends EventEmitter {

    constructor() {
        super();
    }

    editAddress() {
        /**
        * Edit the delivery address
        */
        console.log('edit the address')

        this.emit(CHANGE_EVENT)
    }

    deleteAddress() {
        /**
        * Edit the delivery address
        */
        console.log('address deleted')

        this.emit(CHANGE_EVENT)
    }

    handleActions(action) {

        switch(action.type) {

            case AddressConstant.EDIT_ADDRESS: {
                this.editAddress()
                break
            }

            case AddressConstant.DELETE_ADDRESS: {
                this.deleteAddress()
                break
            }
        }
    }

}

const deliveryAddressStore = new DeliverAddressStore;
Dispatcher.register(deliveryAddressStore.handleActions.bind(deliveryAddressStore))

export default DeliverAddressStore
