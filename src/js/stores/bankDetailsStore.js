import EventEmitter from 'events'
import Dispatcher from '../dispatcher'

import BankDetailsConstant from '../constants/BankDetailsConstants'
import GlobalConstant from '../constants/GlobalConstants'
import helper from '../helpers.js'

class BankDetailsStore extends EventEmitter {

    constructor() {
        super()

        this.bankDetails = {
            "cards": [
                {
                    "id": 1,
                    "cardNumber": "63040362932181450",
                    "expiriy": '',
                    "cvv": '',
                    "active": true,
                }//,
                // {
                //     "id": 2,
                //     "cardNumber": "67716697717121336",
                //     "active": false
                // },
                // {
                //     "id": 3,
                //     "cardNumber": "63041131913735868",
                //     "active": false
                // },
                // {
                //     "id": 4,
                //     "cardNumber": "63045501795013152",
                //     "active": false
                // },
                // {
                //     "id": 5,
                //     "cardNumber": "67095829910283875",
                //     "active": false
                // }
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

    newBankCard(card) {
        const newCard = {
            "id": Date.now(),
            "cardHolder": card.cardHolder,
            "cardNumber": card.cardNumber,
            "expiriy": card.expiriy,
            "cvv": card.cvv,
            "active": true
        }

        // Clear all the current bank cards - should only be 1
        while ( this.bankDetails.cards.length > 0) {
            this.bankDetails.cards.pop();
        }

        // Add the newly created card
        this.bankDetails.cards.push(newCard)

        console.log(this.bankDetails.cards)

        this.emit(GlobalConstant.CHANGE_EVENT)
    }

    editAddress(address) {
        const id = address.id

        addressID = helper.findById(this.bankdetails.addresses, id)


        debugger
    }

    handleActions(action) {

        switch(action.type) {

            case BankDetailsConstant.GET_BANKDETAILS: {
                this.getBankDetails()
                break
            }

            case BankDetailsConstant.NEW_BANKCARD: {
                this.newBankCard(action.card)
                break
            }

            case BankDetailsConstant.EDIT_BANKADDRESS: {
                this.editAddress(action.address)
                break
            }
        }
    }
}

const bankDetailsStore = new BankDetailsStore;
Dispatcher.register(bankDetailsStore.handleActions.bind(bankDetailsStore))

export default bankDetailsStore
