import React, { useContext } from "react";
import style from "./UserInterface.module.css";
import { changeIsSigningOut } from "../../store/actionCreators/userPanelActionCreators";
import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { AppContext } from "../../context/context";
import Header from "../../styled/Header";

const UserCard = () => {

    const dispatch = useDispatch();
    const context = useContext(AppContext);

    return (
        <div className={style.user_box}>
            <div className={style.user_picture}>AB</div>
            <div className={style.text_box}>
                <Header $mode={context.mode}>Antonio Bonilla</Header>
                <h2 className={style.user_email}>antonio.bonilla@horus.com.uy</h2>
            </div>
            <Button $coralWhite $mode={context.mode} onClick={() => {dispatch(changeIsSigningOut())}}>Sign Out</Button>
        </div>
    )
};

export default UserCard;