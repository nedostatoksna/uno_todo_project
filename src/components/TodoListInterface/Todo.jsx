import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Todo = ({ todo }) => {

    const dispatch = useDispatch();
    const isShowingImportantTasks = useSelector(state => state.todoListUI.isShowingImportant);
    const isShowingCompletedTasks = useSelector(state => state.todoListUI.isShowingCompleted);

    return (
        <li>
        {todo.title}
        </li>
    )
};

export default Todo;