import React from 'react'

import Formsy from 'formsy-react'
import Input from '../forms/input'

import Store from '../../stores/accountDetailsStore'
import Actions from '../../actions/accountDetailsActions'


class AccountDetails extends React.Component {

    constructor() {
        super()

        this.state = {
            accountDetails: Store.getAccount(),
            disabled: '',
            canSubmit: '',
        }
    }

    componentDidMount() {
        Store.on("change", _ => {
            this.setState({
                accountDetails: Store.getAccount()
            })
        })
    }

    enableButton () {
        this.setState({
            canSubmit: true
        });
    }

    disableButton () {
        this.setState({
            canSubmit: false
        });
    }

    submit(model){
        /**
        * @param {model} contains the fields and their value of submitted form
        */
        Actions.addAddress(model)

    }

    render() {
        const account = this.state.accountDetails

        return (
            <div className="decoration decoration__paper decoration__tape decoration__tape--left">
                <h2 className="text-center">Change your account details</h2>

                    <Formsy.Form
                        className="clearfix"
                        onSubmit={this.submit}
                        onValid={this.enableButton.bind(this)}
                        onInvalid={this.disableButton.bind(this)} >

                        <Input
                            value={account.fname}
                            name="name"
                            required
                            validations={{
                                isExisty: true
                            }}
                            />

                        <Input
                            value={account.lname}
                            name="house"
                            required
                            validations={{
                                isExisty: true
                            }}
                            />
                        <Input
                            value={account.email}
                            name="street"
                            required
                            validations={{
                                isExisty: true
                            }}
                            />
                        <Input
                            value={account.password}
                            name="city"
                            required
                            validations={{
                                isExisty: true
                            }}
                            />
                        <Input
                            value={account.phone}
                            name="city"
                            required
                            validations={{
                                isExisty: true
                            }}
                            />
                        <button type="submit" disabled={!this.state.canSubmit} className="button button__primary" >Update</button>
                    </Formsy.Form>
            </div>
        )
    }
}

export default AccountDetails;
