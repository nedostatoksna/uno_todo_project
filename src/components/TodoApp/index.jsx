import React from "react";
import SideBar from "../SideBar";
import TaskListInterface from "../TaskListInterface";
import style from "./TodoApp.module.css";

const TodoApp = () => {

    return (
        <div className={style.app_wrapper}>
            <SideBar />
            <TaskListInterface />
        
        </div>
    )
};

export default TodoApp;