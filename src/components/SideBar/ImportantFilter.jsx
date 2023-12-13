import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showAllTodos, preShowImportant } from "../../store/actionCreators/todoListActionCreators";
import ListButton from "../../ui/ListButton";
import { AppContext } from "../../context/context";
import FlexColumnWrapper from "../../styled/FlexColumnWrapper";

const ImportantFilter = () => {

    const dispatch = useDispatch();
    const lists = useSelector(state => state.dataLists);
    const context = useContext(AppContext);
    const isShowingImportant  = useSelector(state => state.todoListUI.isShowingImportant);
    const isShowingAllTodos = useSelector(state => state.todoListUI.isShowingAllTodos);

    const checkAreThereAnyTodosAndDispatch = () => {
        if (lists.length) dispatch(showAllTodos()) 
    }
    
    return (
        <FlexColumnWrapper $margin={"auto auto 5px auto"}>
            <ListButton $active={isShowingImportant} $starIcon $mode={context.mode} onClick={() => {dispatch(preShowImportant())}}>Important</ListButton>
            <ListButton $active={isShowingAllTodos} $houseIcon $mode={context.mode} onClick={() => checkAreThereAnyTodosAndDispatch()}>Tasks</ListButton>
        </FlexColumnWrapper>
    )
};

export default ImportantFilter;

