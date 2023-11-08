import React from "react";
import style from "./StartPage.module.css";
import logo from "../../images/logoUnoMD.svg";
import startPageIllustration from "../../images/startPageIlustration.svg";

const StartPage = ({ setIsVisible }) => {

    return (
        <>
            <div className={style.wrapper}>
                <div className={style.content_wrapper}>
                    <img src={logo} alt="uno logo" width="103px" height="30px" className={style.logo}/>
                    <h1 className={style.header}>Welcome to Uno To Do!</h1>
                    <h2 className={style.subheader}>
                        Start using the best to-do app, you can
                        create and manage your To Do lists to
                        improve your organization.
                    </h2>
                    <button className={style.start_btn} onClick={() => setIsVisible(false)}>Get started</button>
                </div>
                <div className={style.illustration_wrapper}>
                    <img src={startPageIllustration} alt="uno starting page illustration" width="942px" height="862px" />
                </div>
            </div>
        </>
    )
};

export default StartPage;