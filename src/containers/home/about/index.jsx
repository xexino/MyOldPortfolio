const HomeAbout = () => {
    return (
        <div className="section bg-dark overflow-hidden">
            <div className="about-section section-padding mt-n3 mb-n1">
                <div
                    className="about-images"
                    style={{
                        backgroundImage: `url(${process.env.PUBLIC_URL}/images/mypicture.jpeg)`,
                    }}
                ></div>

                <div className="container">
                    <div
                        className="row justify-content-end"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                    >
                        <div className="col-lg-6">
                            <div className="about-content">
                                <h3 className="title">Aboute Me</h3>
                                <p className="about-text">
                                    {` Hey, I’m Ayman El Hamoussi. I am full stack developer , with Electrical Engineering background.`}
                                </p>
                                <p>
                                    {`I like to create new stuff and experiment with it.
                                      Nothing is constant, so I favor action over perfection
                                       (I learn it the hard way).`}
                                </p>
                                <p>
                                    {` I am passionate about User Experience and Design, I’m in the process to nail that skill on professional level.  This website is one of my attempts of trial and error in my learning process. I hope you like it.
                                       I think that technology evolving faster than we can adapt to it, so the best way is to adjust the mentality of being uncomfortable to some degree. The future is just another path.`}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeAbout;
