import React, { useContext } from "react";
import style from "./TaskListInterface.module.css";
import { useSelector } from "react-redux";

import List from "./List";
import Wrapper from "../../ui/divs/Wrapper";
import { AppContext } from "../../context/context";

const TaskListInterface = () => {

    const lists = useSelector(state => state.dataLists);
    const activeList = useSelector(state => state.todoListUI.activeListId);
    const context = useContext(AppContext);

    return (
        <Wrapper $purple $padding={"20px"} $width={"1232px"}>
            {
                lists.map(list => (
                    list.id === activeList ? <List key={list.id} list={list}/> : undefined
                ))
            }
        </Wrapper>
    )
};

export default TaskListInterface;