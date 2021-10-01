import React from 'react'
import Heart from '../images/heart.png'
import PropTypes from 'prop-types'

const ProductListItem = ({ category, name, description, image }) => {
    return (
        <>
            <div className="col-md-4 col-xs-12 col-sm-6">
                <div className="whats-img scale">
                    <a href="/">
                        <img src={image} alt="" className="img" />
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

ProductListItem.propTypes = {
    category: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.string.isRequired,
}

ProductListItem.defaultProps = {
    description: 'No description...',
    image: 'images/noimage.jpg',
}

export default ProductListItem
