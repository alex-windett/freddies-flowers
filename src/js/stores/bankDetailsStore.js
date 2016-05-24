import EventEmitter from 'events'
import Dispatcher from '../dispatcher'

import BankDetailsConstant from '../constants/BankDetailsConstants'
import GlobalConstant from '../constants/GlobalConstants'

import { findById } from '../helpers'

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
                    "active": true
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
        // Make sure id passed is an interger
        const addressId = parseInt(address.address)

        // Find the correct address
        const targetAddress = findById(this.bankDetails.addresses, addressId)

        // Set all address to inactive
        for ( let address of this.bankDetails.addresses ) {
            address.active = false
        }

        // Set only the target address to active
        targetAddress.active = true

    }

    newBankAddress(address) {

        /**
            For each of the current addresses set their billing address
            activity to false

            Then add the new address with its status as active
        */
        for ( let address of this.bankDetails.addresses ) {
            address.active = false
        }

        const newBankAddress = {
            id: Date.now(),
            postcode: address.postcode,
            address: `${address.house} ${address.street}`,
            active: true,
        }

        this.bankDetails.addresses.push(newBankAddress)

        this.emit(GlobalConstant.CHANGE_EVENT)
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

            case BankDetailsConstant.NEW_BANKADDRESS: {
                this.newBankAddress(action.address)
                break
            }
        }
    }
}

const bankDetailsStore = new BankDetailsStore;
Dispatcher.register(bankDetailsStore.handleActions.bind(bankDetailsStore))

export default bankDetailsStore
