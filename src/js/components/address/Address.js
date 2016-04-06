import React from 'react'

class Address extends React.Component {

    constructor() {
        super()
    }

    render() {

        return (
            <div>
                <h2>Manage your delivery address</h2>

                <table>
                    <tbody>
                        <tr>
                            <td>First Line of address</td>
                            <td>Quantity</td>
                            <td>Total cost</td>
                            <td>Manage</td>
                        </tr>

                        <tr>
                            <td>9 Takhar Mews</td>
                            <td>1 box</td>
                            <td>20</td>
                            <td>
                                <button className="button">Edit</button>
                                <button className="button alert">Cancel</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Address;
