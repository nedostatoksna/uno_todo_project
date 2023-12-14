import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppContext } from "../../context/context";
import ListButton from "../../ui/ListButton";
import FlexColumnWrapper from "../../ui/FlexColumnWrapper";
import { switchActiveTodoList } from "../../store/actionCreators/thunks";

const ListOfLists = () => {

    const lists = useSelector(state => state.dataLists);
    const activeList = useSelector(state => state.todoListUI.activeListId);
    const dispatch = useDispatch();
    const context = useContext(AppContext);
    const isShowingAllTasks = useSelector(state => state.todoListUI.isShowingAllTodos);

    return (
        <FlexColumnWrapper $marginBottomSmall $mode={context.mode}>
            {
                (lists.length > 0)
                    ?
                    lists.map(list => (
                        <ListButton 
                            $active={!isShowingAllTasks && list.id === activeList}
                            $listIcon
                            key={list.id} 
                            $mode={context.mode}
                            onClick={() => {dispatch(switchActiveTodoList({ listId: list.id }))}}
                            $marginTop 
                        >
                            {list.title}
                        </ListButton>
                    )) : undefined
            }
        </FlexColumnWrapper>
    )
};

export default ListOfLists;

