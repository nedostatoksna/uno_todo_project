import React from "react";
import style from "./SideBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleUserPanel } from "../../store/actionCreators/userPanelActionCreators";
import UserInterface from "../UserInterface";

const SearchBar = () => {
    const dispatch = useDispatch();

    return (
        <div className={style.search_wrapper}>
            <input placeholder="Search" className={style.input} />
            <hr className={style.line} />
        </div>

    )
};

export default SearchBar;