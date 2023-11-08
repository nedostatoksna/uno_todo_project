import React from "react";
import style from "./SideBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleUserPanel } from "../../store/actionCreators/userPanelActionCreators";
import UserInterface from "../UserInterface";
import SearchBar from "./SearchBar";
import ImportantFilter from "./ImportantFilter";
import ListOfLists from "../ListOfLists";
import NewListBtn from "./NewListBtn";


const SideBar = () => {
    const dispatch = useDispatch();

    const userPanelState = useSelector(state => state.userPanelUI.isShowingUserPanel);

    return (
        <section className={style.sidebar_wrapper}>
            <div className={style.user_box} onClick={() => {dispatch(toggleUserPanel())}}>
                <div className={style.user_picture}>AB</div>
                <div className={style.text_box}>
                    <h1 className={style.user_name}>Antonio Bonilla</h1>
                    <h2 className={style.user_email}>antonio.bonilla@horus.com.uy</h2>
                </div>
            </div>
            { userPanelState && <UserInterface toggleUserPanel={toggleUserPanel} /> }
            <SearchBar />
            <ImportantFilter />
            <hr className={style.divider} width="240px" />
            <ListOfLists />
            <NewListBtn />
        </section>
    )
};

export default SideBar;