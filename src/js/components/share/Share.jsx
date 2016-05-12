import React from 'react'

class Share extends React.Component {

    constructor() {
        super()
    }

    render() {

        return (
            <div className="decoration decoration__paper decoration__tape decoration__tape--left text-center">
                <header className="share__header">
                    <h2 className="text-center">Fancy FREE Flowers?</h2>
                    <p>Share your invitation code with your friends and you’ll get a free box of flowers each time someone signs up.</p>
                    <p>And it’s not an entirely selfish move: your friendswill get their first box free, too. Win-win!</p>
                </header>

                <footer className="share__invitation">
                    <p>Just send this invitation link to your pals:</p>
                    <span className="share__invitation--link">www.freddiesflowers.com?lucyl66</span>

                    <section className="row column socialites">
                        <ul className="plainlist">
                            <li className="socialites--item"><a href="#"><i className="icon-facebook"></i></a></li>
                            <li className="socialites--item"><a href="#"><i className="icon-twitter"></i></a></li>
                            <li className="socialites--item"><a href="#"><i className="icon-email"></i></a></li>
                            <li className="socialites--item"><a href="#"><i className="icon-sms"></i></a></li>
                        </ul>
                    </section>

                    <p className="padded">Or simply tell them to type in the following code when they sign up:</p>
                    <h4 className="share__invitation--code">LUCYL66</h4>
                </footer>
            </div>
        )
    }
}

export default Share;
