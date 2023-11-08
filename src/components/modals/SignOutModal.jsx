import React from "react";
import style from "./Modals.module.css";
import { useDispatch } from "react-redux";
import { changeIsLoggingOut } from "../../store/actionCreators/userPanelActionCreators";

const SignOutModal = () => {

    const dispatch = useDispatch();

    return (
        <div className={style.modal}>
            <div className={style.modal_content}>
                <h1 className={style.header}>Sign Out</h1>
                <p className={style.text}>Are you sure you would like to sign out?</p>
                <div className={style.btns_box}>
                    <button className={style.cancel} onClick={() => {dispatch(changeIsLoggingOut())}}>Cancel</button>
                    <button className={style.sign_out} onClick={() => {dispatch(changeIsLoggingOut())}}>Sign Out</button>
                </div>
            </div>
        </div>
    )
};

export default SignOutModal;