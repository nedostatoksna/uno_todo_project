import React from "react";
import style from "./ListOfLists.module.css";
import { useDispatch, useSelector } from "react-redux";
import { switchActiveTodoId } from "../../store/actionCreators/todoListActionCreators";
import Wrapper from "../../ui/divs/Wrapper";


const ListOfLists = () => {

    const lists = useSelector(state => state.dataLists);
    const activeList = useSelector(state => state.todoListUI.activeListId);
    const dispatch = useDispatch();

    return (
        <Wrapper $margin={"auto auto 5px auto"} $width={"240px"} $height={"608px"}>
            {
                (lists.length > 0)
                    ?
                    lists.map(list => (
                        <button className={list.id === activeList ? style.active_list : style.list} key={list.id} onClick={() => {dispatch(switchActiveTodoId(list.id))}}>{list.title}</button>
                    )) : undefined
            }
        </Wrapper>
    )
};

export default ListOfLists;