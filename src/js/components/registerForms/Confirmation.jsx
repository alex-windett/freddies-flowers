import React from 'react'

class Confirmation extends React.Component {

    constructor() {
        super()
    }

    render() {

        return (
            <div className="row confirmation">
                <aside className="columns medium-6">
                    <div className="confirmation__image--wrapper">
                        <img className="confirmation__image--medium" src="./src/images/content/registration-confirmation.jpg"/>
                        <span className="confirmation__image--name">Alex</span>
                    </div>
                </aside>
                <article className="columns medium-6">
                    <div className="confirmatio__content text-center">
                        <h1 className="confirmatio__content--title">You are completelyand utterly brilliant</h1>

                        <p className="confirmatio__content--body">Call me impulsive but I’ve decided to mark this moment with a small tattoo. Hope you don’t mind! Very much looking forward to seeing you soon. Exciting times ahead.</p>

                        <footer className="confirmation__content--share">
                            <h1>Share this powerful imagewith your pals:</h1>
                            <section className="row column socialites socialites--blue">
                                <ul className="plainlist">
                                    <li className="socialites__item"><a href="#"><i className="icon-facebook"></i></a></li>
                                    <li className="socialites__item"><a href="#"><i className="icon-twitter"></i></a></li>
                                    <li className="socialites__item"><a href="#"><i className="icon-email"></i></a></li>
                                    <li className="socialites__item"><a href="#"><i className="icon-sms"></i></a></li>
                                </ul>
                            </section>
                        </footer>
                    </div>
                </article>
            </div>
        )
    }
}

export default Confirmation
