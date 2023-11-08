import React from "react";
import style from "./UserInterface.module.css";

const About = () => {

    return (
        <div className={style.about}>
            <p className={style.about_text}>About</p>
            <p className={style.version}>Version<span className={style.version_number}>1.0</span></p>
        </div>
    )
};

export default About;