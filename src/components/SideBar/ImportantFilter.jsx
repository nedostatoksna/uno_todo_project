import React from "react";
import style from "./SideBar.module.css";
import { useDispatch } from "react-redux";
import { switchVisibleImportant } from "../../store/actionCreators/todoListActionCreators";
import Wrapper from "../../ui/divs/Wrapper";

const ImportantFilter = () => {

    const dispatch = useDispatch();

    return (
        <Wrapper $margin={"auto auto 5px auto"} width={"240px"}>
            <button className={style.important} onClick={() => {dispatch(switchVisibleImportant())}}>Important</button>
            <button className={style.tasks} onClick={() => {dispatch(switchVisibleImportant())}}>Tasks</button>
        </Wrapper>
    )
};

export default ImportantFilter;