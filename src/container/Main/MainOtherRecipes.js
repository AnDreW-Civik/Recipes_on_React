import React from 'react'
import homeRecipes from '../images/home_recipes2_columnbg1.jpg'

const MainOtherRecipes = () => {
    return (
        <>
            <section className="other-recipes">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-md-12 col-sm-12">
                            <div class="other-recipes-main-img">
                                <img
                                    src={homeRecipes}
                                    alt=""
                                    className="other-recipes-img"
                                />

                                <div className="other-main">
                                    <h5 className="check-this">Check this</h5>
                                    <h2 className="check-this-descr">
                                        Other recipes
                                    </h2>
                                </div>

                                <div className="welcome-btn green pos">
                                    <a href="/">
                                        Show all
                                        <span class="welcome-arrow arrow">
                                            &gt;
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MainOtherRecipes
