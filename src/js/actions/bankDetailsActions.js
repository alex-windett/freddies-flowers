import dispatcher from '../dispatcher'
import BankDetailsConstant from '../constants/BankDetailsConstants'

const BankDetailsActions = {

    getBankDetails() {
        dispatcher.dispatch({
            type: BankDetailsConstant.GET_BANKDETAILS
        })
    },
}

export default BankDetailsActions
