import dispatcher from '../dispatcher'
import AccountDetailsConstant from '../constants/AccountDetailsConstants'

const EditAccount = {

    editAccount(fname, lname, address, password) {
        dispatcher.dispatch({
            type: AccountDetailsConstant.GET_ACCOUNT,
        })

        dispatcher.dispatch({
            type: AccountDetailsConstant.EDIT_ACCOUNT,
        })
    }
}

export default EditAccount
