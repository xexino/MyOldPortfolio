import React from "react";
import AboutBannerContent from "../../../components/about-banner-content";
import SocialIcon from "../../../components/social-icon";
import AboutData from "../../../data/about.json";

const AboutBannerContainer = () => {
    return (
        <div className="section about-banner-section overflow-hidden">
            <div className="about-banner d-flex align-items-center">
                <div className="container">
                    <AboutBannerContent data={AboutData[1]} />
                </div>

                <div className="about-banner-image">
                    <img src="/images/me.jpg" alt="andle" />
                </div>
            </div>

            <ul className="social">
                <li>
                    <SocialIcon
                        path="https://twitter.com/Xexino991"
                        icon="fab fa-twitter"
                    />
                </li>
                <li>
                    <SocialIcon
                        path="https://www.facebook.com/Xexino"
                        icon="fab fa-facebook-f"
                    />
                </li>
                <li>
                    <SocialIcon
                        path="https://github.com/xexino?tab=repositories"
                        icon="fab fa-github"
                    />
                </li>
            </ul>
        </div>
    );
};

export default AboutBannerContainer;
