import React from 'react'

import Store from '../../stores/accountDetailsStore'
import Actions from '../../actions/accountDetailsActions'

class AccountDetails extends React.Component {

    constructor() {
        super()

        this.state = {
            accountDetails: Store.getAccount()
        }
    }

    componentDidMount() {
        Store.on("change", _ => {
            this.setState({
                addresses: Store.getAccount()
            })
        })
    }

    render() {
        const account = this.state.accountDetails

        return (
            <div className="decoration decoration__paper decoration__tape">
                <h2 className="text-center">Change your account details</h2>

                <form method="post">
                    <label>First name</label>
                    <input type="text" defaultValue={account.fname}/>

                    <label>Last name</label>
                    <input type="text" defaultValue={account.lname}/>

                    <label>Email</label>
                    <input type="email" defaultValue={account.email}/>

                    <label>Password</label>
                    <input type="password" defaultValue={account.password}/>

                    <label>Phone Number</label>
                    <input type="number" defaultValue={account.phone}/>

                    <button className="button button__primary">Update</button>
                </form>
            </div>
        )
    }
}

export default AccountDetails;
