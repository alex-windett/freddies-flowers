import dispatcher from '../dispatcher'
import AddressConstant from '../constants/DeliveryAddressConstants';

const DeliveryAddressActions = {

    getAddresses() {
        dispatcher.dispatch({
            type: AddressConstant.GET_ADDRESSES
        })
    },

    editAddress() {
        dispatcher.dispatch({
            type: AddressConstant.EDIT_ADDRESS
        })
    },

    cancelAddress(id) {
        dispatcher.dispatch({
            type: AddressConstant.DELETE_ADDRESS,
            id
        })
    },

    addAddress(address) {
        dispatcher.dispatch({
            type: AddressConstant.ADD_ADDRESS,
            address
        })
    }
}

export default DeliveryAddressActions
