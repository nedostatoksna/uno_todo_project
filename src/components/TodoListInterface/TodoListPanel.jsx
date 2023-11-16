import React from "react";
import Tabs from "./Tabs";
import AddTodoBtn from "./AddTodoBtn";
import styled from "styled-components";
import ListEditPanel from "./ListEditPanel";
import TodoList from "./TodoList";

const TodoListPanel = ({ list }) => {

    return (
        <>
            <ListInterfaceWrapper>
                <ListWrapper>
                    <ListEditPanel list={list} />
                    <Tabs />
                    <TodoList list={list} />  
                </ListWrapper>

                <AddTodoBtn />
            </ListInterfaceWrapper>
       </>
    )
};

export default TodoListPanel;

const ListInterfaceWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    height: 100%;
`;
const ListWrapper = styled.div`
    width: 100%;
    height: 100%;
`;
