import dispatcher from '../dispatcher'
import AccountDetailsConstant from '../constants/AccountDetailsConstants'

const AccountDetails = {

    getAccount() {
        dispatcher.dispatch({
            type: AccountDetailsConstant.GET_ACCOUNT,
        })
    },

    editAccount(modelData) {
        dispatcher.dispatch({
            type: AccountDetailsConstant.EDIT_ACCOUNT,
            modelData,
        })
    },
}

export default AccountDetails
