import React from "react";
import style from "./UserSettings.module.css";
import { save, toggleUserPanel } from "../../store/actionCreators/userPanelActionCreators";

const SaveCancelBtns = ({dispatch, dynamicContext}) => {

    return (
        <div className={style.save_box}>
            <button className={style.cancel} onClick={() => {dispatch(toggleUserPanel())}}>Cancel</button>
            <button className={style.save} onClick={() => {dispatch(save(dynamicContext))}}>Save</button>
        </div>
    )
};

export default SaveCancelBtns;