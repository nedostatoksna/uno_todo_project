import React, { useState } from "react";
import style from "./Modals.module.css";
import { useDispatch } from "react-redux";
import { toggleRenamingList } from "../../store/actionCreators/todoListActionCreators";
import { renameList } from "../../store/actionCreators/dataListActionCreators.js.js";

const RenameModal = ({ listId }) => {

    const [value, setValue] = useState("");
    const dispatch = useDispatch();
    const preSaveNewName = (listId, value) => {
        dispatch(renameList(listId, value));
        dispatch(toggleRenamingList());
    };

    return (
        <div className={style.rename_modal}>
            <div className={style.rename_modal_content}>
                <h1 className={style.header}>Rename list</h1>
                <input value={value} onChange={(e) => setValue(e.target.value)} className={style.rename_input} placeholder="Rename list" />
                <div className={style.rename_btns_box}>
                    <button className={style.cancel} onClick={() => {dispatch(toggleRenamingList())}}>Cancel</button>
                    <button className={style.rename} onClick={() => preSaveNewName(listId, value)}>Rename</button>
                </div>
            </div>
        
        </div>
    )
};

export default RenameModal;