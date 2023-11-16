import React, { useContext } from "react";
import style from "./ListOfLists.module.css";
import { useDispatch, useSelector } from "react-redux";
import { switchActiveTodoId } from "../../store/actionCreators/todoListActionCreators";
import { AppContext } from "../../context/context";
import styled from "styled-components";
import ListButton from "../../ui/ListButton";

const ListOfLists = () => {

    const lists = useSelector(state => state.dataLists);
    const activeList = useSelector(state => state.todoListUI.activeListId);
    const dispatch = useDispatch();
    const context = useContext(AppContext);

    return (
        <Wrapper $mode={context.mode}>
            {
                (lists.length > 0)
                    ?
                    lists.map(list => (
                        <ListButton 
                            $active={list.id === activeList}
                            $listIcon
                            key={list.id} 
                            onClick={() => {dispatch(switchActiveTodoId(list.id))}}
                        >
                            {list.title}
                        </ListButton>
                    )) : undefined
            }
        </Wrapper>
    )
};

export default ListOfLists;

const Wrapper = styled.div`
    background-color: ${props => props.$mode === "Light" ? "#fff" : "#201F24"};
    margin: auto auto 5px auto;
    display: flex;
    flex-direction: column;
`;