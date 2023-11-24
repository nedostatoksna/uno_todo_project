import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { toggleCreatingTodo } from "../../store/actionCreators/todoListActionCreators";
import Button from "../../ui/Button";
import { AppContext } from "../../context/context";

const AddTodoBtn = () => {

    const dispatch = useDispatch();
    const context = useContext(AppContext);

    return (
        <Button 
            $whitePlus 
            $greyTransparent 
            $positionForPlus 
            $widthMax 
            $paddingForPlus 
            $mode={context.mode}
            onClick={() => {dispatch(toggleCreatingTodo())}}
        >
            Add a task
        </Button>
    )
};

export default AddTodoBtn;