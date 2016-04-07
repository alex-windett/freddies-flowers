import dispatcher from '../dispatcher'
import Constant from '../constants/deliveryAddressConstants';
const DeliveryAddressActions = {

    editAddress() {
        dispatcher.dispatch({
            type: Constant.EDIT_ADDRESS
        })
    },

    cancelAddress() {
        dispatcher.dispatch({
            type: Constant.DELETE_ADDRESS
        })
    }
}

export default DeliveryAddressActions
