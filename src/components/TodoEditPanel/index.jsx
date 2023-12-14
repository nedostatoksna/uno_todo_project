import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { AppContext } from "../../context/context";
import TodoEditHeader from "./TodoEditHeader";
import Divider from "../../ui/Divider";
import AddDueDate from "./AddDueDate";
import Note from "./Note";
import TodoEditFooter from "./TodoEditFooter";
import FlexColumnWrapper from "../../ui/FlexColumnWrapper";

const TodoEditPanel = () => {
    const context = useContext(AppContext);
    const activeTodoId = useSelector(state => state.todoPanelUI.activeTodoId);
    const lists = useSelector(state => state.dataLists);
    const activeListId = useSelector(state => state.todoListUI.activeListId);

    const setActiveTodo = () => {
        let result
            lists.map(list => 
                (list.id === activeListId)
                    ? list.todos.map(todo => (
                        (todo.id === activeTodoId)
                        ? result = todo : undefined
                    )) : undefined )
            return result;
    };
    const activeTodo = setActiveTodo();

    return (
        <FlexColumnWrapper $padding={"30px 10px 20px 10px"} $spaceBetween $mode={context.mode} $width={"20vw"}>
            <div>
                <TodoEditHeader todo={activeTodo} /> 
                    <FlexColumnWrapper $padding={"12px 10px 0px 10px"}>
                        <Divider $mode={context.mode} $light $margin={"0px"} />
                        <AddDueDate todo={activeTodo} />
                        <Divider $mode={context.mode} $light $margin={"0px"} />
                        <Note todoId={activeTodo.id} note={activeTodo.note} listId={activeTodo.parentListId} /> 
                        <Divider $mode={context.mode} $light $margin={"0px"} />
                    </FlexColumnWrapper>
            </div>
            <TodoEditFooter todo={activeTodo} />
        </FlexColumnWrapper>
    )
};

export default TodoEditPanel;
 