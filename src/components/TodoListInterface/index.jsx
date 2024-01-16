import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { AppContext } from "../../context/context";
import TodoListPanel from "./TodoListPanel";
import Background from "../../ui/Background";

const TodoListInterface = () => {

    const lists = useSelector(state => state.dataLists);
    const activeListId = useSelector(state => state.todoListUI.activeListId);
    const context = useContext(AppContext);
    const isShowingTodoEditPanel = useSelector(state => state.todoPanelUI.isShowingEditPanel);

    return (
        <Background 
            $primary 
            $heightMin
            $mode={context.mode} 
            $widthLarge={isShowingTodoEditPanel === false} 
            $widthSmall={isShowingTodoEditPanel}
        >
            {
                lists.map(list => (
                    list.id === activeListId && <TodoListPanel key={list.id} list={list}/> 
                ))
            }
        </Background>
    )
};

export default TodoListInterface;
