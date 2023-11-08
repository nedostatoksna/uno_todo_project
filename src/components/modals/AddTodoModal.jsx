import React, { useState } from "react";
import style from "./Modals.module.css";
import { useDispatch } from "react-redux";
import { toggleCreatingTodo } from "../../store/actionCreators/todoListActionCreators";
import { addTodoToList } from "../../store/actionCreators/dataListActionCreators.js.js";

const AddTodoModal = () => {

    const [value, setValue] = useState("");
    const dispatch = useDispatch();
    const preAddNewTodo = (value) => {
        dispatch(addTodoToList(value));
        dispatch(toggleCreatingTodo());
    };

    return (
        <div className={style.rename_modal}>
            <div className={style.rename_modal_content}>
                <h1 className={style.header}>Add a task</h1>
                <input value={value} onChange={(e) => setValue(e.target.value)} className={style.rename_input} placeholder="Add a task" />
                <div className={style.rename_btns_box}>
                    <button className={style.cancel} onClick={() => {dispatch(toggleCreatingTodo())}}>Cancel</button>
                    <button className={style.add} onClick={() => preAddNewTodo(value)}>Add</button>
                </div>
            </div>
        </div>
    )
};

export default AddTodoModal;