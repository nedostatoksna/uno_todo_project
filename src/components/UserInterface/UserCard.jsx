import React from "react";
import style from "./UserInterface.module.css";
import { changeIsLoggingOut } from "../../store/actionCreators/userPanelActionCreators";

const UserCard = ({dispatch}) => {

    return (
        <div className={style.user_box}>
            <div className={style.user_picture}>AB</div>
            <div className={style.text_box}>
                <h1 className={style.user_name}>Antonio Bonilla</h1>
                <h2 className={style.user_email}>antonio.bonilla@horus.com.uy</h2>
            </div>
            <button className={style.sigh_out_btn} onClick={() => {dispatch(changeIsLoggingOut())}}>Sign Out</button>
        </div>
    )
};

export default UserCard;