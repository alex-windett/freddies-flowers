import React                    from 'react'
import Formsy                   from 'formsy-react';

import DropdownSelect           from '../formElements/DropdownSelect'
import Input                    from '../formElements/Input'
import CardDetailsInputs        from '../formElements/CardDetailsInputs'
import BankDetailsChangeAddress from './BankDetailsChangeAddress'
import BankDetailsRegisteredCards from './BankDetailsRegisteredCards'

import GlobalConstant           from '../../constants/GlobalConstants'

import Store                    from '../../stores/bankDetailsStore'
import Actions                  from '../../actions/bankDetailsActions'

class BankDetails extends React.Component {

    constructor() {
        super(),
        this.state = {
            canSubmit: false,
            bankDetails: Store.getBankDetails()
        }
    }

    enableButton() {
        this.setState({
            canSubmit: true
        })
    }

    disableButton() {
        this.setState({
            canSubmit: false
        })
    }

    componentDidMount() {
        Store.on(GlobalConstant.CHANGE_EVENT, _ => {
            this.setState({
                bankDetails: Store.getBankDetails()
            })
        })
    }

    render() {

        return (
            <div className="decoration decoration__paper decoration__tape decoration__tape--left clearfix">
                <h2 className="text-center">Manage your payment details</h2>

                <BankDetailsRegisteredCards bankCards={this.state.bankDetails.cards} />

                <BankDetailsChangeAddress addresses={this.state.bankDetails.addresses}/>
            </div>
        )
    }
}

export default BankDetails;
