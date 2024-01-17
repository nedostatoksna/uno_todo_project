import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Checkbox from "../../ui/Checkbox.jsx";
import { 
    changeCompleted, 
    changeImportant } from "../../store/actionCreators/dataListActionCreators.js";
import FlexRowWrapper from "../../ui/FlexRowWrapper.jsx";
import Title from "./Title.jsx";

const TodoEditHeader = ({ todo }) => {

    const dispatch = useDispatch();
    const activeTodoId = useSelector(state => state.todoPanelUI.activeTodoId);
    const activeListId = useSelector(state => state.todoListUI.activeListId);

    return (
        <FlexRowWrapper 
            $center 
            $marginBottomSmall 
            $spaceBetween
        >
            <Checkbox
                sidebar
                labelPrimary 
                checkedPrimary 
                isChecked={todo.isCompleted}
                todoId={todo.id}
                onChangeHandler={() => {dispatch(changeCompleted({ 
                    listId: activeListId, 
                    todoId: activeTodoId, 
                    isCompleted: !todo.isCompleted }))}}
            />
            <Title todo={todo} />
            <Checkbox 
                labelStarGrey
                starChecked 
                isChecked={todo.isImportant}
                todoId={todo.id}
                onChangeHandler={() => {dispatch(changeImportant({ 
                    listId: activeListId, 
                    todoId: todo.id, 
                    isImportant: !todo.isImportant }))}} 
            />
        </FlexRowWrapper>
    )
};

export default TodoEditHeader;
 


