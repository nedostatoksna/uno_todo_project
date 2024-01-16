import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { toggleCreatingList } from "../../store/actionCreators/todoListActionCreators";
import { AppContext } from "../../context/context";
import Button from "../../ui/Button";

const NewListBtn = () => {
    const dispatch = useDispatch();
    const context = useContext(AppContext);

    return (
        <Button 
            onClick={() => {dispatch(toggleCreatingList())}} 
            $purplePlus 
            $positionForPlus 
            $positionSmallIndent
            $ClearBackground 
            $purpleColor 
            $mode={context.mode}
            $fixedPosition
            $widthWithIndents
            $MarginBottomLarge
        >
            New List
        </Button>
    )
};

export default NewListBtn;