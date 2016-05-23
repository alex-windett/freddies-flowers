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

    editAddress(address) {
        dispatcher.dispatch({
            type: BankDetailsConstant.EDIT_BANKADDRESS,
            address
        })
    },

    newBankAddress(address) {

        dispatcher.dispatch({
            type: BankDetailsConstant.NEW_BANKADDRESS,
            address
        })
    },
}

export default BankDetailsActions
