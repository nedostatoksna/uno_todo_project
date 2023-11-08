import React from "react";
import style from "./TaskListInterface.module.css";
import { useSelector } from "react-redux";

import List from "./List";

const TaskListInterface = () => {

    const lists = useSelector(state => state.dataLists);
    const activeList = useSelector(state => state.todoListUI.activeListId);

    return (
        <div className={style.wrapper}>
            {
                lists.map(list => (
                    list.id === activeList ? <List key={list.id} list={list}/> : undefined
                ))
            }

        </div>

    )
};

export default TaskListInterface;