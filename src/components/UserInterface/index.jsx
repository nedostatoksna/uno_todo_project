import React from "react";
import style from "./UserInterface.module.css";
import crossIcon from "../../images/crossIcon.svg";
import { useDispatch, useSelector } from "react-redux";
import SignOutModal from "../modals/SignOutModal";
import UserSettings from "../UserSettings";
import UserCard from "./UserCard";

const UserInterface = ({ toggleUserPanel }) => {

    const dispatch = useDispatch();
    const isLoggingOut = useSelector(state => state.userPanelUI.isLogouting);

    return (
        <>
        {
            isLoggingOut ? <SignOutModal /> : undefined
        } 
        <div className={style.modal}>
            <div className={style.modal_content}>
                <div className={style.header_box}>
                    <img src={crossIcon} alt="close icon" width="40px" height="40px" className={style.close_icon} onClick={() => {dispatch(toggleUserPanel())}}/>
                    <h1 className={style.header}>Settings</h1>
                </div>
                <UserCard dispatch={dispatch} />
                <hr className={style.divider} width="460px" />
                <UserSettings />

            </div>
        </div>     
        </>  
    )
};

export default UserInterface; 