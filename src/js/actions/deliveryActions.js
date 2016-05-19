import dispatcher from '../dispatcher'
import DeliveryConstant from '../constants/DeliveryConstants'

const DeliveryActions = {

    removeDelivery(id) {
        dispatcher.dispatch({
            type: DeliveryConstant.DELETE_DELIVERY,
            id
        })
    },
}

export default DeliveryActions
