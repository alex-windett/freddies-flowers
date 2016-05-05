import EventEmitter from 'events'
import Dispatcher from '../dispatcher'

import BankDetailsConstant from '../constants/BankDetailsConstants'
import GlobalConstant from '../constants/GlobalConstants'

class BankDetailsStore extends EventEmitter {

    constructor() {
        super()

        this.bankDetails = {
            "cards": [
                {
                    "id": 1,
                    "cardNumber": "63040362932181450",
                    "active": true
                },
                {
                    "id": 2,
                    "cardNumber": "67716697717121336",
                    "active": false
                },
                {
                    "id": 3,
                    "cardNumber": "63041131913735868",
                    "active": false
                },
                {
                    "id": 4,
                    "cardNumber": "63045501795013152",
                    "active": false
                },
                {
                    "id": 5,
                    "cardNumber": "67095829910283875",
                    "active": false
                }
            ],
            "addresses": [
                {
                    "id": 1,
                    "address": "12 gordon place",
                    "active": false
                },
                {
                    "id": 2,
                    "address": "9 takhar mews",
                    "active": false
                },
                {
                    "id": 3,
                    "address": "some palce in london",
                    "active": false
                },
                {
                    "id": 4,
                    "address": "another some palce in england",
                    "active": false
                },
                {
                    "id": 5,
                    "address": "another place",
                    "active": false
                }
            ]
        }
    }

    getBankDetails() {
        return this.bankDetails
    }


    handleActions(action) {

        switch(action.type) {

            case BankDetailsConstant.GET_BANKDETAILS: {
                this.getBankDetails()
                break
            }
        }
    }
}

const bankDetailsStore = new BankDetailsStore;
Dispatcher.register(bankDetailsStore.handleActions.bind(bankDetailsStore))

export default bankDetailsStore
