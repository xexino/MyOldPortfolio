import ContactForm from "../../components/contact-form";

const ContactContainer = () => {
    return (
        <div className="section contact-section bg-dark">
            <div
                className="contact-bg"
                style={{
                    backgroundImage: `url("https://i.pinimg.com/564x/ca/be/1c/cabe1cecbc9f0dc213a4aa55a19791c4.jpg")`,
                }}
            ></div>

            <div className="container">
                <div className="row justify-content-end">
                    <div className="col-lg-7">
                        <div className="contact-section-wrapper">
                            <div className="contact-info" data-aos="fade-up">
                                <span className="mail">
                                    <a href="mailto:someone@example.com">
                                        hello@andle.com
                                    </a>
                                </span>
                                <span className="number">
                                    <a href="tel:+212 607848752">
                                        (+212) 6 06 07 09 09
                                    </a>
                                </span>
                            </div>

                            <div
                                className="contact-form"
                                data-aos="fade-up"
                                data-aos-duration="600"
                            >
                                <ContactForm />
                            </div>

                            <div
                                className="contact-social"
                                data-aos="fade-up"
                                data-aos-duration="900"
                            >
                                <ul>
                                    <li>
                                        <a
                                            rel="noopener noreferrer"
                                            target="_blank"
                                            className="github"
                                            href="https://github.com/xexino?tab=repositories"
                                        >
                                            github
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            rel="noopener noreferrer"
                                            target="_blank"
                                            className="facebook"
                                            href="https://www.facebook.com/xexino/"
                                        >
                                            facebook
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            rel="noopener noreferrer"
                                            target="_blank"
                                            className="twitter"
                                            href="https://twitter.com/Xexino991"
                                        >
                                            Twitter
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactContainer;
