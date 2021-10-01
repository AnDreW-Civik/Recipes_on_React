import React, { Component } from 'react'
import Slider from 'react-slick'
import Johnson from '../images/Johnson.jpg'
import Lee from '../images/Lee.jpg'
import Ross from '../images/Ross.jpg'
import Johnes from '../images/Johnes.jpg'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const MainCarousel = () => {
    return (
        <>
            <section className="testimonials">
                <div className="sliders">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-xs-12 col-sm-12">
                                <h2 className="testimonials-header">
                                    Testimonials
                                </h2>
                                <div className="slider-block">
                                    <MainCarouseleclass />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

class MainCarouseleclass extends Component {
    render() {
        const settings = {
            dots: true,
            arrows: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
        }
        return (
            <Slider {...settings}>
                <div>
                    <img src={Johnson} alt="" />
                    <h3 className="testimonials-slider-descr">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. A corporis quibusdam tempora sit fugit vel ratione
                        animi sint officiis, nulla corrupti.
                    </h3>
                    <div className="dots">
                        <span className="dots-green">.</span>
                        <span className="dots-green">.</span>
                        <span className="dots-green">.</span>
                    </div>
                    <h2 className="testimonials-slider-name">Tony Johnson</h2>
                </div>
                <div>
                    <img src={Lee} alt="" />
                    <h3 className="testimonials-slider-descr">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. A corporis quibusdam tempora sit fugit vel ratione
                        animi sint officiis, nulla corrupti.
                    </h3>
                    <div className="dots">
                        <span className="dots-green">.</span>
                        <span className="dots-green">.</span>
                        <span className="dots-green">.</span>
                    </div>
                    <h2 className="testimonials-slider-name">Jennifer Lee</h2>
                </div>
                <div>
                    <img src={Ross} alt="" />
                    <h3 className="testimonials-slider-descr">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. A corporis quibusdam tempora sit fugit vel ratione
                        animi sint officiis, nulla corrupti.
                    </h3>

                    <div className="dots">
                        <span className="dots-green">.</span>
                        <span className="dots-green">.</span>
                        <span className="dots-green">.</span>
                    </div>
                    <h2 className="testimonials-slider-name">Brandon Ross</h2>
                </div>
                <div>
                    <img src={Johnes} alt="" />
                    <h3 className="testimonials-slider-descr">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. A corporis quibusdam tempora sit fugit vel ratione
                        animi sint officiis, nulla corrupti.
                    </h3>
                    <div className="dots">
                        <span className="dots-green">.</span>
                        <span className="dots-green">.</span>
                        <span className="dots-green">.</span>
                    </div>
                    <h2 className="testimonials-slider-name">
                        Katarina Johnes
                    </h2>
                </div>
            </Slider>
        )
    }
}

export default MainCarousel
