import React, { useState } from "react";
import style from "./Modals.module.css";
import { useDispatch } from "react-redux";
import { toggleCreatingList } from "../../store/actionCreators/todoListActionCreators";
import { createList } from "../../store/actionCreators/dataListActionCreators.js.js";

const CreateListModal = () => {

    const [value, setValue] = useState("");
    const dispatch = useDispatch();
    const preCreateNewName = (value) => {
        dispatch(createList(value));
        dispatch(toggleCreatingList());
    };

    return (
        <div className={style.rename_modal}>
            <div className={style.rename_modal_content}>
                <h1 className={style.header}>New list</h1>
                <input value={value} onChange={(e) => setValue(e.target.value)} className={style.rename_input} placeholder="Enter list title" />
                <div className={style.rename_btns_box}>
                    <button className={style.cancel} onClick={() => {dispatch(toggleCreatingList())}}>Cancel</button>
                    <button className={style.create} onClick={() => preCreateNewName(value)}>Create</button>
                </div>
            </div>
        </div>
    )
};

export default CreateListModal;