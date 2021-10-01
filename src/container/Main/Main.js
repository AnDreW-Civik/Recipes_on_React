import React from 'react'
import MainWelcome from './MainWelcome'
import ProductsList from '../Products/Productslist'
import MainOtherRecipes from './MainOtherRecipes'

const Main = () => {
    return (
        <>
            <main>
                <MainWelcome />
                <ProductsList />
                <MainOtherRecipes />
            </main>
        </>
    )
}

export default Main
