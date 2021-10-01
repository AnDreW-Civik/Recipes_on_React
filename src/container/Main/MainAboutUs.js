import React from 'react'
import MainAboutUsCategory from './MainAboutUsCategory'

const MainAboutUs = () => {
    return (
        <>
            <section className="about-us">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-xs-12 col-sm-12">
                            <h5 className="welcome-text">about us</h5>
                            <h2 className="welcom-descr white">
                                Natural products and <br />
                                aromatic spices
                            </h2>
                            <p className="welcome-paragr color">
                                Curabitur sed iaculis dolor, non congue ligula.
                                Maecenas imperdiet ante
                                <br /> eget hendrerit posuere. Nunc urna libero,
                                congue porta nibh a, semper <br />
                                feugiat sem. Sed auctor dui eleifend,
                                scelerisque eros ut, pellentesque nibh. <br />
                                Nam lacinia suscipit accumsan.
                            </p>

                            <div className="btns about-us-btns">
                                <div className="welcome-btn green">
                                    <a href="/">
                                        Read more
                                        <span className="welcome-arrow about-us-arrow">
                                            &gt;
                                        </span>
                                    </a>
                                </div>
                                <div className="welcome-btn gray">
                                    <a href="/">
                                        Our catering
                                        <span className="welcome-arrow-catering">
                                            &gt;
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <MainAboutUsCategory />
            </section>
        </>
    )
}

export default MainAboutUs
