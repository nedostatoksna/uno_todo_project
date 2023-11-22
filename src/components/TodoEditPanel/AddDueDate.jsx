import React, { useCallback, useContext, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppContext } from "../../context/context";
import styled, { css } from "styled-components";
import Checkbox from "../../ui/StyledCheckbox";
import { changeCompleted, changeImportant, changeTitle, deleteDeadline } from "../../store/actionCreators/dataListActionCreators.js";
import { toggleChooseDeadlinePanel, toggleEditingTitle } from "../../store/actionCreators/todoPanelActionCreators";
import Divider from "../../ui/Divider";
import Button from "../../ui/Button";

const AddDueDate = ({ todo }) => {

    const titleInputFocus = useRef(null);

    const dispatch = useDispatch();
    const context = useContext(AppContext);
    const activeTodoId = useSelector(state => state.todoPanelUI.activeTodoId);
    const activeListId = useSelector(state => state.todoListUI.activeListId);
    const isEditingTitle = useSelector(state => state.todoPanelUI.isEditingTitle);
    const isShowingChooseDeadlineModal = useSelector(state => state.todoPanelUI.isShowingChooseDeadlineModal);
    const deadline = todo.deadlineDate;

    // const cashedPreEdit = useCallback(() => {
    //     dispatch(toggleEditingTitle());
    // }, [dispatch]);

    // useEffect(() => {
    //     const input = titleInputFocus.current;
    //     input.addEventListener("focus", cashedPreEdit);
    //     return () => input.removeEventListener("focus", cashedPreEdit);
    // }, [cashedPreEdit]);

    return (
        <AddDueDateWrapper $mode={context.mode}>
            <Button
                $icon
                $type={"addDate"}
                alt="calendar icon" 
                $margin={"0px 16px 0px 0px"} 
                $width={"24px"}
                $height={"24px"}
                $mode={context.mode}
            ></Button>
                        <StyledInputWrapper>
                                <StyledDueDateInput 
                                    $mode={context.mode} 
                                    placeholder="Add Due Date" 
                                    value={deadline}
                                    id="dueDateInput"
                                    onChange={() => {dispatch(toggleChooseDeadlinePanel())}}
                                />
                        </StyledInputWrapper>
                    { 
                        deadline.length > 0 
                            ?  <Button
                                    $icon
                                    $type={"crossGrey"}
                                    $margin={"0px 0px 0px 16px"}
                                    alt="grey cross"
                                    $width={"24px"}
                                    $height={"24px"}
                                    onClick={() => {dispatch(deleteDeadline(activeListId, activeTodoId))}}
                                    $mode={context.mode}
                                ></Button> : undefined
                    }

        </AddDueDateWrapper>
    )
};

export default AddDueDate;
 
const AddDueDateWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 12px 0px;
    padding: 8px 0px;
`;
const StyledInputWrapper = styled.div`

`;
const StyledDueDateInput = styled.input`

`;

