import React from 'react'

class Share extends React.Component {

    constructor() {
        super()
    }

    render() {

        return (
            <div className="decoration decoration__paper decoration__tape decoration__tape--left text-center">
                <h2 className="text-center">Fancy FREE Flowers?</h2>

                <p>Share your referral code with your mates and for each one who signs up, your next box of spanking fresh flowers will be on us.</p>
                <p>And its not an entirely selfish move: your friend will get their first box free as well! Win win!</p>

                <hr />

                <label>Just send this invitation link to your pals:</label>
                <input className="input__readonly input__copylink" readOnly value="www.freddiesflowers.com?lucyl66" />

                    <section className="row column socialites">
                        <ul className="plainlist">
                            <li className="socialites--item"><a href="#"><i className="icon-facebook"></i></a></li>
                            <li className="socialites--item"><a href="#"><i className="icon-instagram"></i></a></li>
                        </ul>
                    </section>

                <h4>LUCYL66</h4>
            </div>
        )
    }
}

export default Share;
