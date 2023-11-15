import React from "react";
import { useDispatch } from "react-redux";
import { toggleCreatingTodo } from "../../store/actionCreators/todoListActionCreators";
import Button from "../../ui/Button";

const AddTodoBtn = () => {

    const dispatch = useDispatch();

    return (
        <>
            <Button $plusBtnTransparent onClick={() => {dispatch(toggleCreatingTodo())}}>Add a task</Button>
        </>
    )
};

export default AddTodoBtn;