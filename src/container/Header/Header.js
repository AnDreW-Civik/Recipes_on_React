import React from 'react'
import Menu from './Menu/Menu'
import HambMenu from './Menu/HamburgerMenu/HambMenu'
import SocialLinks from './Menu/SocialLinks'
import HeaderLogo from './Menu/HeaderLogo'

const Header = () => {
    return (
        <>
            <header className="page-header">
                <div className="container">
                    <div className="row">
                        <HeaderLogo />
                        <div className="col-xs-12 col-md-7 col-sm-8">
                            <nav className="navigation">
                                <Menu />
                                <SocialLinks />
                            </nav>
                            <HambMenu />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
