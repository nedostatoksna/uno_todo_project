import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListButton from "../../ui/ListButton";
import { AppContext } from "../../context/context";
import FlexColumnWrapper from "../../ui/FlexColumnWrapper";
import { openAllTodosPanel, 
         openImportantTodoListPanel } from "../../store/actionCreators/thunks";

const ImportantFilter = () => {

    const dispatch = useDispatch();
    const lists = useSelector(state => state.dataLists);
    const context = useContext(AppContext);
    const isShowingImportant  = useSelector(state => state.todoListUI.isShowingImportant);
    const isShowingAllTodos = useSelector(state => state.todoListUI.isShowingAllTodos);
    const isSearching = useSelector(state => state.todoListUI.isSearching);

    const checkAreThereAnyTodosAndDispatch = () => {
        if (lists.length) dispatch(openAllTodosPanel()) 
    }
    
    return (
        <FlexColumnWrapper $marginBottomSmall>
            <ListButton 
                $active={!isSearching && isShowingImportant} 
                $starIcon 
                $mode={context.mode} 
                onClick={() => {!isSearching && dispatch(openImportantTodoListPanel())}}
            >
                Important
            </ListButton>
            <ListButton 
                $active={!isSearching && isShowingAllTodos} 
                $houseIcon 
                $mode={context.mode} 
                onClick={() => !isSearching && checkAreThereAnyTodosAndDispatch()}
            >
                Tasks
            </ListButton>
        </FlexColumnWrapper>
    )
};

export default ImportantFilter;

