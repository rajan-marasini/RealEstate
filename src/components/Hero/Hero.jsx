import React from "react";
import CountUp from "react-countup";
import { HiLocationMarker } from "react-icons/hi";
import HeroImage from "../../../public/hero-image.png";
import "./Hero.css";

const Hero = () => {
    return (
        <div className="hero-wrapper">
            <div className="paddings innerWidth flexCenter hero-container">
                {/* left side  */}

                <div className="flexColStart hero-left">
                    <div className="hero-title">
                        <div className="orange-circle" />
                        <h1>
                            Discover <br /> Most Suitable <br /> Property
                        </h1>
                    </div>
                    <div className="flexColStart hero-des">
                        <span className="secondaryText">
                            Find a variety of properties that suits you very
                            easily{" "}
                        </span>
                        <span className="secondaryText">
                            Forget all difficulties in find a residence for you
                        </span>
                    </div>

                    <div className="flexCenter search-bar">
                        <HiLocationMarker color="var(--blue)" size={25} />
                        <input type="text" name="" id="" />
                        <button className="button">Search</button>
                    </div>
                    <div className="flexCenter stats">
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={8000} end={9000} duration={4} />
                                <span>+</span>
                            </span>
                            <span className="secondaryText">
                                Premium Products
                            </span>
                        </div>
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={1900} end={2000} duration={4} />
                                <span>+</span>
                            </span>
                            <span className="secondaryText">
                                Happy Costumer
                            </span>
                        </div>
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={0} end={28} />
                                <span>+</span>
                            </span>
                            <span className="secondaryText">
                                Award Winnings
                            </span>
                        </div>
                    </div>
                </div>

                {/* right side */}

                <div className="flexCenter hero-right">
                    <div className="image-container">
                        <img src={HeroImage} alt="hero img" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
