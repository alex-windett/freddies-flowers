import dispatcher from '../dispatcher'
import Constant from '../constants/DeliveryAddressConstants'

const DeliveryActions = {

    cancelDelivery() {
        dispatcher.dispatch({
            type: Constant.DELETE_DELIVERY
        })
    }
}

export default DeliveryActions
