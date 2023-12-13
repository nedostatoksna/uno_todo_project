import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppContext } from "../../context/context";
import ListButton from "../../ui/ListButton";
import FlexColumnWrapper from "../../styled/FlexColumnWrapper";
import { switchActiveTodoList } from "../../store/actionCreators/thunks";

const ListOfLists = () => {

    const lists = useSelector(state => state.dataLists);
    const activeList = useSelector(state => state.todoListUI.activeListId);
    const dispatch = useDispatch();
    const context = useContext(AppContext);

    return (
        <FlexColumnWrapper $margin={"auto auto 5px auto"} $mode={context.mode}>
            {
                (lists.length > 0)
                    ?
                    lists.map(list => (
                        <ListButton 
                            $active={list.id === activeList}
                            $listIcon
                            key={list.id} 
                            $mode={context.mode}
                            onClick={() => {dispatch(switchActiveTodoList({ listId: list.id }))}}
                            $margin={"5px 0px 0px 0px"}
                        >
                            {list.title}
                        </ListButton>
                    )) : undefined
            }
        </FlexColumnWrapper>
    )
};

export default ListOfLists;

