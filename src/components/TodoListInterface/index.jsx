import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { AppContext } from "../../context/context";
import styled from "styled-components";
import TodoListPanel from "./TodoListPanel";

const TodoListInterface = () => {

    const lists = useSelector(state => state.dataLists);
    const activeList = useSelector(state => state.todoListUI.activeListId);
    const context = useContext(AppContext);

    return (
        <>
            <TodoListInterfaceWrapper $mode={context.mode}>
                {
                    lists.map(list => (
                        list.id === activeList ? <TodoListPanel key={list.id} list={list}/> : undefined
                    ))
                }
            </TodoListInterfaceWrapper>

        </>
    )
};

export default TodoListInterface;

const TodoListInterfaceWrapper = styled.div`
    background-color: ${props => props.$mode === "Light" ? "#B0A2F2" : "#544794"};
    padding: 20px;
    width: 80vw;
`;