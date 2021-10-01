import React from 'react'
import MainWelcome from './MainWelcome'
import ProductsList from '../Products/Productslist'
import MainOtherRecipes from './MainOtherRecipes'
import MainAboutUs from './MainAboutUs'
import MainCarousel from './MainCarousel'
import MainContacts from './MainContacts'

const Main = () => {
    return (
        <>
            <main>
                <MainWelcome />
                <ProductsList />
                <MainOtherRecipes />
                <MainAboutUs />
                <MainCarousel />
                <MainContacts />
            </main>
        </>
    )
}

export default Main
