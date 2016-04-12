import dispatcher from '../dispatcher'
import AddressConstant from '../constants/DeliveryAddressConstants';

const DeliveryAddressActions = {

    editAddress() {
        dispatcher.dispatch({
            type: AddressConstant.EDIT_ADDRESS
        })
    },

    cancelAddress() {
        dispatcher.dispatch({
            type: AddressConstant.DELETE_ADDRESS
        })
    },

    addAddress(e) {
        dispatcher.dispatch({
            type: AddressConstant.ADD_ADDRESS,
            e
        })
    }
}

export default DeliveryAddressActions
