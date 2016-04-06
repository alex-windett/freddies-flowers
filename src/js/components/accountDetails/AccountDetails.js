import React from 'react'

class AccountDetails extends React.Component {

    constructor() {
        super()
    }

    render() {

        return (
            <div>
                <h2 className="text-center">Change your account details</h2>

                <form method="post">
                    <label>First name</label>
                    <input type="text" />

                    <label>Last name</label>
                    <input type="text" />

                    <label>Email</label>
                    <input type="email" />

                    <label>Password</label>
                    <input type="password" />

                    <label>Phone Number</label>
                    <input type="number" />

                    <button className="button">Update</button>
                </form>
            </div>
        )
    }
}

export default AccountDetails;
