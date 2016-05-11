import EventEmitter from 'events'
import Dispatcher from '../dispatcher'

import AccountDetailsConstant from '../constants/AccountDetailsConstants'

const CHANGE_EVENT = 'change'

class AccountDetailsStore extends EventEmitter {

    constructor() {
        super();

        this.accountDetails = {
            id: 1,
            fname: 'Alex',
            lname: 'Windett',
            email: 'alex@bigfish.co.uk',
            password: 'riffraff',
            phone: '07875488415'
        }
    }

    getAccount() {
        return this.accountDetails
    }

    editAccount(modelData) {
        /**
        * Edit the delivery address
        */

        let account = this.accountDetails

        account.fname       = modelData.fname
        account.lname       = modelData.lname
        account.email       = modelData.email
        account.password    = modelData.password
        account.phone       = modelData.phone

        console.log('new account details ', account)

        this.emit(CHANGE_EVENT)
    }

    handleActions(action) {

        switch(action.type) {

            case AccountDetailsConstant.GET_ACCOUNT: {
                this.getAccount()
                break
            }

            case AccountDetailsConstant.EDIT_ACCOUNT: {
                this.editAccount(action.modelData)
                break
            }
        }
    }

}

const accountDetailsStore = new AccountDetailsStore;
Dispatcher.register(accountDetailsStore.handleActions.bind(accountDetailsStore))

export default accountDetailsStore
