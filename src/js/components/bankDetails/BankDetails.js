import React from 'react'

class BankDetails extends React.Component {

    constructor() {
        super()
    }

    render() {

        return (
            <div>
                <h2 className="text-center">Manage your payment details</h2>

                <form method="post">
                    <lable>Card Number</lable>
                    <input type="number"/>
                    <button className="button button__primary">Edit</button>

                    <br />

                    <lable>Billing Address</lable>
                    <select>
                        <option>Address 1</option>
                        <option>Address 2</option>
                        <option>Address 3</option>
                    </select>
                    <button className="button button__primary">Edit</button>
                </form>
            </div>
        )
    }
}

export default BankDetails;
