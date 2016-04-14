import EventEmitter from 'events'
import Dispatcher from '../dispatcher'
import AddressConstant from '../constants/DeliveryAddressConstants'

const CHANGE_EVENT = 'change'

class DeliveryAddressStore extends EventEmitter {

    constructor() {
        super();

        this.addresses = [
            {
                id: 1,
                address: '9 Takhar Mews',
                quantity: 1,
                cost: 20
            },
            {
                id: 2,
                address: '12 Gordon Place',
                quantity: 4,
                cost: 80
            },
            {
                id: 3,
                address: 'Big Fish Design',
                quantity: 123,
                cost: 100000
            }
        ]
    }

    getAddresses() {
        return this.addresses
    }

    editAddress() {
        /**
        * Edit the delivery address
        */
        console.log('edit the address')
        this.emit(CHANGE_EVENT)
    }

    deleteAddress(id) {
        /**
        * Delete the delivery address
        */
        let addresses = this.addresses

        addresses.reduceRight( (acc, obj, idx) => {
            if ( id.indexOf(obj.id) > -1 )
                addresses.splice( idx, 1 );
        }, 0);

        this.emit(CHANGE_EVENT)
    }

    addAddress(data) {
        /**
        * Add am delivery address
        */
        const newAddress = {
            id      : Date.now(),
            address : `${data.house}  ${data.street}  ${data.postcode}  ${data.city}`,
            quantity: 0,
            cost    : 0

        }

        this.addresses.push(newAddress)

        this.emit(CHANGE_EVENT)
    }

    handleActions(action) {

        switch(action.type) {

            case AddressConstant.GET_ADDRESSES: {
                this.getAddresses()
                break
            }

            case AddressConstant.EDIT_ADDRESS: {
                this.editAddress()
                break
            }

            case AddressConstant.DELETE_ADDRESS: {
                this.deleteAddress(action.id)
                break
            }

            case AddressConstant.ADD_ADDRESS: {
                this.addAddress(action.data)
                break
            }
        }
    }

}

const deliveryAddressStore = new DeliveryAddressStore;
Dispatcher.register(deliveryAddressStore.handleActions.bind(deliveryAddressStore))

export default deliveryAddressStore
