import React from "react";
import style from "./SideBar.module.css";
import { useDispatch } from "react-redux";
import { switchVisibleImportant } from "../../store/actionCreators/todoListActionCreators";
import styled from "styled-components";

const ImportantFilter = () => {

    const dispatch = useDispatch();

    return (
        <Wrapper $list>
            <button className={style.important} onClick={() => {dispatch(switchVisibleImportant())}}>Important</button>
            <button className={style.tasks} onClick={() => {dispatch(switchVisibleImportant())}}>Tasks</button>
        </Wrapper>
    )
};

export default ImportantFilter;

const Wrapper = styled.div`
    margin: auto auto 5px auto;
`;