import React from 'react'

const MainWelcome = () => {
    return (
        <>
            <section className="main-welcome">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-xs-12 col-sm-7">
                            <h1 className="welcome-text">welcome</h1>
                            <h2 className="welcom-descr">
                                Easy recipes <br />
                                for any occasion
                            </h2>
                            <p className="welcome-paragr">
                                Sed ultrices nisl velit, eu ornare est
                                ullamcorper a. Nunc quis nibh magna. Proin risus
                                erat, fringilla vel purus sit amet, mattis porta
                                enim. Duis fermentum faucibus est.
                            </p>
                            <div className="btns">
                                <div className="welcome-btn green">
                                    <a href="/">
                                        About us
                                        <span className="welcome-arrow">
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
            </section>
        </>
    )
}

export default MainWelcome
