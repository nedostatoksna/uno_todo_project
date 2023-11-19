import React, { useContext } from "react";
import style from "./UserInterface.module.css";
import crossIcon from "../../images/crossIcon.svg";
import { useDispatch } from "react-redux";
import UserSettings from "../UserSettings";
import UserCard from "./UserCard";
import Background from "../../styled/Background";
import ContentBox from "../../styled/ContentBox";
import { AppContext } from "../../context/context";
import Header from "../../styled/Header";
import Divider from "../../ui/Divider";

const UserInterface = ({ toggleUserPanel }) => {

    const dispatch = useDispatch();
    const context = useContext(AppContext);

    return (
        <>
        <Background $darkTransparent>
            <ContentBox $mode={context.mode} $primary>
                <div className={style.header_box}>
                    <img src={crossIcon} alt="close icon" width="40px" height="40px" className={style.close_icon} onClick={() => {dispatch(toggleUserPanel())}}/>
                    <Header $mode={context.mode}>Settings</Header>
                </div>
                <UserCard />
                <Divider $mode={context.mode} $height={"1px"} />
                <UserSettings />

            </ContentBox>
        </Background>     
        </>  
    )
};

export default UserInterface; 