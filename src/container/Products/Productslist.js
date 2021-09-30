import React from 'react'
import ProductListItem from './ProductsListItem'
import productsArray from './productsArray'

const ProductsList = () => {
    return (
        <>
            <section className="whats-new">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-xs-12 col-sm-12">
                            <div className="whats-new-description">
                                <h2 className="whats-new-header">
                                    What's new on our table
                                </h2>
                                <p className="whats-new-parag">
                                    Do you want to see more
                                    <a href="/">Show all recipes</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="whats-new-img">
                        {productsArray.map(
                            ({ category, name, description }) => (
                                <ProductListItem
                                    category={category}
                                    name={name}
                                    description={description}
                                />
                            )
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductsList
