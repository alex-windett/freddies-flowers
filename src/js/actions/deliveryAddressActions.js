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
    }
}

export default DeliveryAddressActions
