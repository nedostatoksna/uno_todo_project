import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { switchActiveTodoListId, switchVisibleImportant, toggleShowingAllTodos } from "../../store/actionCreators/todoListActionCreators";
import styled from "styled-components";
import ListButton from "../../ui/ListButton";
import { AppContext } from "../../context/context";

const ImportantFilter = () => {

    const dispatch = useDispatch();
    const context = useContext(AppContext);

    const preShowImportant = () => {
        dispatch(switchActiveTodoListId(""))
        dispatch(toggleShowingAllTodos(false))
        dispatch(switchVisibleImportant(true))
    } 

    const preShowAllTodos = () => {
        dispatch(switchActiveTodoListId(""))
        dispatch(switchVisibleImportant(false))
        dispatch(toggleShowingAllTodos(true))
    }

    return (
        <Wrapper>
            <ListButton $starIcon $mode={context.mode} onClick={() => preShowImportant()}>Important</ListButton>
            <ListButton $houseIcon $mode={context.mode} onClick={() => preShowAllTodos()}>Tasks</ListButton>
        </Wrapper>
    )
};

export default ImportantFilter;

const Wrapper = styled.div`
    margin: auto auto 5px auto;
    display: flex;
    flex-direction: column;
`;
