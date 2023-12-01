import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { AppContext } from "../../context/context";
import styled from "styled-components";
import TodoEditHeader from "./TodoEditHeader";
import Divider from "../../ui/Divider";
import AddDueDate from "./AddDueDate";

const TodoEditPanel = () => {
    const context = useContext(AppContext);
    const activeTodoId = useSelector(state => state.todoPanelUI.activeTodoId);
    const lists = useSelector(state => state.dataLists);
    const activeListId = useSelector(state => state.todoListUI.activeListId);

    const setActiveTodo = () => {
        let result
        if (activeTodoId.length) {
            lists.map(list => 
                (list.id === activeListId)
                    ? list.todos.map(todo => (
                        (todo.id === activeTodoId)
                        ? result = todo : undefined
                    )) : undefined )
            return result;
        }
    };

    return (
        <TodoEditWrapper $mode={context.mode}>
            <TodoEditHeader todo={setActiveTodo()} /> 
            <DateNoteEditWrapper>
                <Divider $mode={context.mode} $light $margin={"0px"} />
                <AddDueDate todo={setActiveTodo()} />
                <Divider $mode={context.mode} $light $margin={"0px"} />
            </DateNoteEditWrapper>
        </TodoEditWrapper>
    )
};

export default TodoEditPanel;
 
const TodoEditWrapper = styled.div`
    padding: 30px 10px 20px 10px;
    width: 20vw;
    display: flex;
    flex-direction: column;
`;
const DateNoteEditWrapper = styled.div`
    padding: 12px 10px 0px 10px;
    display: flex;
    flex-direction: column;
`;