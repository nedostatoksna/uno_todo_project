import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { AppContext } from "../../context/context";
import AllTodosList from "./AllTodosList";
import Tabs from "../TodoListInterface/Tabs";
import StyledHeader from "../../styled/StyledHeader";
import Background from "../../styled/Background";
import FlexColumnWrapper from "../../styled/FlexColumnWrapper";

const AllTodosPanel = () => {
    const context = useContext(AppContext);
    const isShowingCompleted = useSelector(state => state.todoListUI.isShowingCompleted);

    const lists = useSelector(state => state.dataLists);
    const allTodos = lists.map(list => list.todos).flat(1);
    const completedTodos = allTodos.filter(todo => todo.isCompleted);

    return (
        <Background $mode={context.mode} $primary $width={"80vw"}>
            <StyledHeader $large $mode={context.mode} $white>Tasks</StyledHeader>
            <Tabs />
            <FlexColumnWrapper $height $spaceBetween>
                <AllTodosList todos={isShowingCompleted ? completedTodos : allTodos} /> 
            </FlexColumnWrapper>
        </Background>
    )
};

export default AllTodosPanel;

