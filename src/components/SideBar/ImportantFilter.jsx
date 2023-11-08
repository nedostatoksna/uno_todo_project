import React from "react";
import style from "./SideBar.module.css";
import { useDispatch } from "react-redux";
import { switchVisibleImportant } from "../../store/actionCreators/todoListActionCreators";

const ImportantFilter = () => {

    const dispatch = useDispatch();

    return (
        <div className={style.important_filter_wrapper}>
            <button className={style.important} onClick={() => {dispatch(switchVisibleImportant())}}>Important</button>
            <button className={style.tasks} onClick={() => {dispatch(switchVisibleImportant())}}>Tasks</button>
        </div>
    )
};

export default ImportantFilter;