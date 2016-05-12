import dispatcher from '../dispatcher'
import AddressConstant from '../constants/DeliveryAddressConstants';

const DeliveryAddressActions = {

    getAddresses() {
        dispatcher.dispatch({
            type: AddressConstant.GET_ADDRESSES
        })
    },

    editAddress(modelData) {
        dispatcher.dispatch({
            type: AddressConstant.EDIT_ADDRESS,
            modelData
        })
    },

    deleteAddress(id) {
        dispatcher.dispatch({
            type: AddressConstant.DELETE_ADDRESS,
            id
        })
    },

    addAddress(data) {
        dispatcher.dispatch({
            type: AddressConstant.ADD_ADDRESS,
            data
        })
    },

    decreaseDelivery(id) {
        dispatcher.dispatch({
            type: AddressConstant.DECREASE_DELIVERY,
            id
        })
    },

    increaseDelivery(id) {
        dispatcher.dispatch({
            type: AddressConstant.INCREASE_DELIVERY,
            id
        })
    },
}

export default DeliveryAddressActions
