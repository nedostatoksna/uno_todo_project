import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Checkbox from "../../ui/StyledCheckbox";

const Todo = ({ todo }) => {

    const dispatch = useDispatch();
    const isShowingImportantTasks = useSelector(state => state.todoListUI.isShowingImportant);
    const isShowingCompletedTasks = useSelector(state => state.todoListUI.isShowingCompleted);

    return (
        <li>
        {todo.title}
        <Checkbox />
        </li>
    )
};

export default Todo;
