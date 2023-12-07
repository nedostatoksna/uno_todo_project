import React from "react";
import Tabs from "./Tabs";
import AddTodoBtn from "./AddTodoBtn";
import styled from "styled-components";
import ListEditPanel from "./ListEditPanel";
import TodoList from "./TodoList";
import { useSelector } from "react-redux";
import FlexWrapper from "../../styled/FlexWrapper";

const TodoListPanel = ({ list }) => {

    const allTodosOfList = list.todos;
    const completedTodos = list.todos.filter(todo => todo.isCompleted);
    const isShowingCompleted = useSelector(state => state.todoListUI.isShowingCompleted);

    return (
        <FlexWrapper $height100 $spaceBetween $flexStart>
            <ListWrapper>
                <ListEditPanel list={list} />
                <Tabs />
                <TodoList list={isShowingCompleted ? completedTodos : allTodosOfList} />  
            </ListWrapper>

            <AddTodoBtn />
        </FlexWrapper>
    )
};

export default TodoListPanel;

const ListWrapper = styled.div`
    width: 100%;
    height: 100%;
`;
