import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { AppContext } from "../../context/context";
import TodoListPanel from "./TodoListPanel";
import Background from "../../styled/Background";

const TodoListInterface = () => {

    const lists = useSelector(state => state.dataLists);
    const activeList = useSelector(state => state.todoListUI.activeListId);
    const context = useContext(AppContext);
    const isShowingTodoEditPanel = useSelector(state => state.todoPanelUI.isShowingEditPanel);

    return (
        <Background $primary $mode={context.mode} $width={isShowingTodoEditPanel ? "60vw" : "80vw"}>
            {
                lists.map(list => (
                    list.id === activeList ? <TodoListPanel key={list.id} list={list}/> : undefined
                ))
            }
        </Background>
    )
};

export default TodoListInterface;
