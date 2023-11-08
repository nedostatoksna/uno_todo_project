import React from "react";
import style from "./TaskListInterface.module.css";
import { useDispatch } from "react-redux";
import { toggleCreatingTodo } from "../../store/actionCreators/todoListActionCreators";

const AddTodoBtn = () => {

    const dispatch = useDispatch();

    return (
        <>
            <button className={style.add_todo_btn} onClick={() => {dispatch(toggleCreatingTodo())}}>Add a task</button>
        </>
    )
};

export default AddTodoBtn;