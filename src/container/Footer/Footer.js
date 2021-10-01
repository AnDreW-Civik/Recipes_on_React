import React from 'react'
import facebook from '../images/icons8-facebook-24.png'
import twitter from '../images/icons8-twitter24.png'
import instagram from '../images/icons8-instagram-16.png'

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 col-xs-12 col-sm-10">
                            <div className="footer-container">
                                <p className="footer-descr">
                                    &copy; 2021 Betheme by{' '}
                                    <a href="/"> Andriy Havrylenko</a> | All
                                    Rights Reserved | Powered by
                                    <a href="/"> AH</a>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-2 col-xs-12 col-sm-2">
                            <div>
                                <ul className="social-icon-footer">
                                    <li className="footer-link">
                                        <a href="/">
                                            <img
                                                src={facebook}
                                                alt="facebook"
                                                className="footer-img"
                                            />
                                        </a>
                                    </li>
                                    <li className="footer-link">
                                        <a href="/">
                                            <img
                                                src={twitter}
                                                alt="twitter"
                                                className="footer-img"
                                            />
                                        </a>
                                    </li>
                                    <li className="footer-link">
                                        <a href="/">
                                            <img
                                                src={instagram}
                                                alt="instagram"
                                                className="footer-img"
                                            />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer
