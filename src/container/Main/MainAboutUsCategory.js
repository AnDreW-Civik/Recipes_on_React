import React from 'react'
import star from '../images/home_recipes2_pic1.png'
import jellyfish from '../images/home_recipes2_pic2.png'
import spices from '../images/home_recipes2_pic3.png'
import fish from '../images/home_recipes2_pic4.png'

const MainAboutUsCategory = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-xs-12 col-sm-12">
                        <div className="about-us-pict">
                            <div className="col-md-3 col-xs-12 col-sm-3">
                                <div className="about-us-main-pict">
                                    <img src={star} alt="star" />
                                </div>
                                <div className="about-us-main-pict-descr">
                                    <h4 className="about-us-pic-desc">
                                        Betheme Star
                                    </h4>
                                    <p className="about-us-pic-desc-p">
                                        Ut ultricies imperdiet sodales. Aliquam
                                        fringilla aliquam.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-3 col-xs-12 col-sm-3">
                                <div className="about-us-main-pict">
                                    <img src={jellyfish} alt="jellyfish" />
                                </div>
                                <div className="about-us-main-pict-descr">
                                    <h4 className="about-us-pic-desc">
                                        World food
                                    </h4>
                                    <p className="about-us-pic-desc-p">
                                        Ut ultricies imperdiet sodales. Aliquam
                                        fringilla aliquam.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-3 col-xs-12 col-sm-3">
                                <div className="about-us-main-pict">
                                    <img src={spices} alt="spices" />
                                </div>
                                <div className="about-us-main-pict-descr">
                                    <h4 className="about-us-pic-desc">
                                        Aromatic spices
                                    </h4>
                                    <p className="about-us-pic-desc-p">
                                        Ut ultricies imperdiet sodales. Aliquam
                                        fringilla aliquam.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-3 col-xs-12 col-sm-3">
                                <div className="about-us-main-pict">
                                    <img src={fish} alt="fish" />
                                </div>
                                <div className="about-us-main-pict-descr">
                                    <h4 className="about-us-pic-desc">
                                        Fresh Meat and Fish
                                    </h4>
                                    <p className="about-us-pic-desc-p">
                                        Ut ultricies imperdiet sodales. Aliquam
                                        fringilla aliquam.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainAboutUsCategory
