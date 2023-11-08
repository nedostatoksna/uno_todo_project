import React from "react";
import style from "./SideBar.module.css";
import { useDispatch } from "react-redux";
import { toggleCreatingList } from "../../store/actionCreators/todoListActionCreators";

const NewListBtn = () => {
    const dispatch = useDispatch();

    return (
        <>
            <button className={style.new_list} onClick={() => {dispatch(toggleCreatingList())}}>New List</button>
        </>
    )
};

export default NewListBtn;