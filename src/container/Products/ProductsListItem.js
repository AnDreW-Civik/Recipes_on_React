import React from 'react'
import Spaghetti from '../images/Spaghetti.jpg'
import Oriental from '../images/Oriental.jpg'
import Rice from '../images/Rice.jpg'
import Salad from '../images/Salad.jpg'
import Seafood from '../images/Seafood.jpg'
import Toast from '../images/Toast.jpg'
import Heart from '../images/heart.png'

const ProductListItem = ({ category, name, description }) => {
    return (
        <>
            <div className="col-md-4 col-xs-12 col-sm-6">
                <div className="whats-img scale">
                    <a href="/">
                        <img src={Spaghetti} alt="" className="img" />
                    </a>
                    <p className="whats-new-author">
                        <span className="category">Category:</span>
                        <a href="/"> {category}</a> at September 20, 2021
                    </p>
                    <h3 className="whats-new-product">
                        <a href="/">{name}</a>
                    </h3>
                    <p className="whats-new-descr">{description}</p>
                    <div className="whats-new-likes">
                        <div>
                            <img
                                src={Heart}
                                alt=""
                                className="whats-new-icon"
                            />
                            <span className="icon-i">1</span>
                        </div>
                        <a href="/" className="whats-new-read-more">
                            Read more
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductListItem
