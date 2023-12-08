import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { preSwitchActiveTodoList } from "../../store/actionCreators/todoListActionCreators";
import { AppContext } from "../../context/context";
import ListButton from "../../ui/ListButton";
import FlexWrapper from "../../styled/FlexWrapper";

const ListOfLists = () => {

    const lists = useSelector(state => state.dataLists);
    const activeList = useSelector(state => state.todoListUI.activeListId);
    const dispatch = useDispatch();
    const context = useContext(AppContext);

    return (
        <FlexWrapper $margin={"auto auto 5px auto"} $mode={context.mode}>
            {
                (lists.length > 0)
                    ?
                    lists.map(list => (
                        <ListButton 
                            $active={list.id === activeList}
                            $listIcon
                            key={list.id} 
                            $mode={context.mode}
                            onClick={() => {dispatch(preSwitchActiveTodoList(list.id))}}
                            $margin={"5px 0px 0px 0px"}
                        >
                            {list.title}
                        </ListButton>
                    )) : undefined
            }
        </FlexWrapper>
    )
};

export default ListOfLists;

