import EventEmitter from 'events'
import Dispatcher from '../dispatcher'
import AddressConstant from '../constants/DeliveryAddressConstants'
import helper from '../helpers'

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
                quantity: 2,
                cost: 100000
            }
        ]
    }

    getAddresses() {
        return this.addresses
    }

    getAddress(id) {
        const address = findById(this.addresses, id)
        return address
    }

    editAddress() {
        /**
        * Edit the delivery address
        */
        console.log('edit the address')
        this.emit(CHANGE_EVENT)
    }

    deleteAddress(targetID) {
        /**
        * Delete the delivery address
        */
        let addresses = this.addresses

        helper.deleteById(addresses, targetID);

        // for ( var i = 0; i < addresses.length; i++ ){
        //     if ( addresses[i].id == targetID ){
        //         //removes 1 element at position i
        //         addresses.splice(i, 1)
        //         break
        //     }
        // }

        this.emit(CHANGE_EVENT)
    }

    addAddress(data) {
        /**
        * Add am delivery address
        */
        const newAddress = {
            id      : Date.now(),
            address : `${data.house}  ${data.street}  ${data.postcode}  ${data.city}`,
            quantity: 1,
            cost    : 20

        }

        this.addresses.push(newAddress)

        this.emit(CHANGE_EVENT)
    }

    increaseDelivery(id) {
        /**
        * Increase delivery amount to specific address
        */
        const addressToChange = helper.findById(this.addresses, id)
        addressToChange.quantity++

        this.emit(CHANGE_EVENT)
    }

    decreaseDelivery(id)  {
        /**
        * Decrease delivery amount to specific address
        */
        const addressToChange = helper.findById(this.addresses, id)
        addressToChange.quantity--

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

            case AddressConstant.INCREASE_DELIVERY: {
                this.increaseDelivery(action.id)
                break
            }

            case AddressConstant.DECREASE_DELIVERY: {
                this.decreaseDelivery(action.id)
                break
            }
        }
    }

}

const deliveryAddressStore = new DeliveryAddressStore;
Dispatcher.register(deliveryAddressStore.handleActions.bind(deliveryAddressStore))

export default deliveryAddressStore
