import React from "react";
import { useDispatch } from "react-redux";
import Checkbox from "../../ui/Checkbox.jsx";
import { 
    changeCompleted, 
    changeImportant } from "../../store/actionCreators/dataListActionCreators.js";

const TodoCheckbox = ({ todo, completed, important }) => {

    const dispatch = useDispatch();

    return (
        <Checkbox 
            labelPrimary={completed}
            checkedPrimary={completed}
            leftPosition={completed}
            labelStar={important}
            starChecked={important}
            rightPosition={important}
            isChecked={completed ? todo.isCompleted : todo.isImportant}
            todoId={todo.id}
            onChangeHandler={() => 
                { completed 
                    ? dispatch(changeCompleted({
                        listId: todo.parentListId, 
                        todoId: todo.id, 
                        isCompleted: !todo.isCompleted }))
                    : dispatch(changeImportant({ 
                        listId: todo.parentListId, 
                        todoId: todo.id, 
                        isImportant: !todo.isImportant }))
                }
            } 
        />

    )
};

export default TodoCheckbox;


