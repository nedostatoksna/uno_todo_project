import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListButton from "../../ui/ListButton";
import { AppContext } from "../../context/context";
import FlexColumnWrapper from "../../styled/FlexColumnWrapper";
import { openAllTodosPanel, openImportantTodoListPanel } from "../../store/actionCreators/thunks";

const ImportantFilter = () => {

    const dispatch = useDispatch();
    const lists = useSelector(state => state.dataLists);
    const context = useContext(AppContext);
    const isShowingImportant  = useSelector(state => state.todoListUI.isShowingImportant);
    const isShowingAllTodos = useSelector(state => state.todoListUI.isShowingAllTodos);

    const checkAreThereAnyTodosAndDispatch = () => {
        if (lists.length) dispatch(openAllTodosPanel()) 
    }
    
    return (
        <FlexColumnWrapper $margin={"auto auto 5px auto"}>
            <ListButton $active={isShowingImportant} $starIcon $mode={context.mode} onClick={() => {dispatch(openImportantTodoListPanel())}}>Important</ListButton>
            <ListButton $active={isShowingAllTodos} $houseIcon $mode={context.mode} onClick={() => checkAreThereAnyTodosAndDispatch()}>Tasks</ListButton>
        </FlexColumnWrapper>
    )
};

export default ImportantFilter;

