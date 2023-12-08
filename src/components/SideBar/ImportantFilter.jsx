import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { preShowAllTodos, preShowImportant } from "../../store/actionCreators/todoListActionCreators";
import styled from "styled-components";
import ListButton from "../../ui/ListButton";
import { AppContext } from "../../context/context";
import FlexColumnWrapper from "../../styled/FlexColumnWrapper";

const ImportantFilter = () => {

    const dispatch = useDispatch();
    const context = useContext(AppContext);
    const isShowingImportant  = useSelector(state => state.todoListUI.isShowingImportant);
    const isShowingAllTodos = useSelector(state => state.todoListUI.isShowingAllTodos);
    
    return (
        <FlexColumnWrapper $margin={"auto auto 5px auto"}>
            <ListButton $active={isShowingImportant} $starIcon $mode={context.mode} onClick={() => {dispatch(preShowImportant())}}>Important</ListButton>
            <ListButton $active={isShowingAllTodos} $houseIcon $mode={context.mode} onClick={() => {dispatch(preShowAllTodos())}}>Tasks</ListButton>
        </FlexColumnWrapper>
    )
};

export default ImportantFilter;

