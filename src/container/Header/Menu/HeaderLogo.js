import React from 'react'
import logo from '../../images/logo.png'

const HeaderLogo = () => {
    return (
        <>
            <div className="col-xs-12 col-md-5 col-sm-4">
                <div className="logo-link">
                    <a href="/">
                        <img src={logo} alt="" className="logo" />
                    </a>
                </div>
            </div>
        </>
    )
}

export default HeaderLogo
