import dispatcher from '../dispatcher'
import DeliveryConstant from '../constants/DeliveryConstants'

const DeliveryActions = {

    cancelDelivery() {
        dispatcher.dispatch({
            type: DeliveryConstant.DELETE_DELIVERY
        })
    }
}

export default DeliveryActions
