import React from "react";
import style from "./TaskListInterface.module.css";
import { useDispatch, useSelector } from "react-redux";
import { switchVisibleCompleted } from "../../store/actionCreators/todoListActionCreators";

const Tabs = () => {

    const completedTabActive = useSelector(state => state.todoListUI.isShowingCompleted);
    const dispatch = useDispatch();

    return (
        <div>
            <button 
                onClick={() => {dispatch(switchVisibleCompleted())}}
                className={!completedTabActive ? style.active_tab : style.tab}
            >To Do</button>
            <button 
                onClick={() => {dispatch(switchVisibleCompleted())}}
                className={completedTabActive ? style.active_tab : style.tab}
            >Completed</button>
            <hr className={style.divider} />
        </div>
    )
};

export default Tabs;