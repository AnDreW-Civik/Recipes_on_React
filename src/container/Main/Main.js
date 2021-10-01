import React from 'react'
import MainWelcome from './MainWelcome'
import ProductsList from '../Products/Productslist'
import MainOtherRecipes from './MainOtherRecipes'
import MainAboutUs from './MainAboutUs'
import MainCarousel from './MainCarousel'

const Main = () => {
    return (
        <>
            <main>
                <MainWelcome />
                <ProductsList />
                <MainOtherRecipes />
                <MainAboutUs />
                <MainCarousel />
            </main>
        </>
    )
}

export default Main
