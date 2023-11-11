import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { toggleCreatingList } from "../../store/actionCreators/todoListActionCreators";
import { AppContext } from "../../context/context";
import PlusButton from "../../ui/buttons/PlusButton";

const NewListBtn = () => {
    const dispatch = useDispatch();
    const context = useContext(AppContext);

    return (
        <>
            <PlusButton
                onClick={() => {dispatch(toggleCreatingList())}}
                $mode={context.mode}
                width="18px"
                height="18px"
            >
                New List
            </PlusButton>
        </>
    )
};

export default NewListBtn;