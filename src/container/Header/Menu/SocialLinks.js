import React from 'react'
import face from '../../images/icons8-facebook-24.png'
import twitter from '../../images/icons8-twitter24.png'
import instagram from '../../images/icons8-instagram-16.png'

const SocialLinks = () => {
    return (
        <>
            <ul className="social_links">
                <li>
                    <a href="/">
                        <img
                            src={face}
                            alt="facebook"
                            className="social_icon"
                        />
                    </a>
                </li>
                <li>
                    <a href="/">
                        <img
                            src={twitter}
                            alt="twitter"
                            className="social_icon"
                        />
                    </a>
                </li>
                <li>
                    <a href="/">
                        <img
                            src={instagram}
                            alt="instagram"
                            className="social_icon"
                        />
                    </a>
                </li>
            </ul>
        </>
    )
}

export default SocialLinks
