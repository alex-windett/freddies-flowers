import dispatcher from '../dispatcher'
import BankDetailsConstant from '../constants/BankDetailsConstants'

const BankDetailsActions = {

    getBankDetails() {
        dispatcher.dispatch({
            type: BankDetailsConstant.GET_BANKDETAILS
        })
    },

    newBankCard(card) {
        dispatcher.dispatch({
            type: BankDetailsConstant.NEW_BANKCARD,
            card
        })
    },
}

export default BankDetailsActions
