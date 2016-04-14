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

    editAccount() {
        /**
        * Edit the delivery address
        */
        console.log('edit the address')
        this.emit(CHANGE_EVENT)
    }

    handleActions(action) {

        switch(action.type) {

            case AccountDetailsConstant.GET_ACCOUNT: {
                this.getAccount()
                break
            }

            case AccountDetailsConstant.EDIT_ACCOOUNT: {
                this.editAccount()
                break
            }
        }
    }

}

const accountDetailsStore = new AccountDetailsStore;
Dispatcher.register(accountDetailsStore.handleActions.bind(accountDetailsStore))

export default accountDetailsStore
