import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppContext } from "../../context/context";
import styled, { css } from "styled-components";
import { deleteDeadline } from "../../store/actionCreators/dataListActionCreators.js";
import { toggleChooseDeadlinePanel } from "../../store/actionCreators/todoPanelActionCreators";
import IconButton from "../../ui/IconButton";

const AddDueDate = ({ todo }) => {

    const dispatch = useDispatch();
    const context = useContext(AppContext);
    const activeTodoId = useSelector(state => state.todoPanelUI.activeTodoId);
    const activeListId = useSelector(state => state.todoListUI.activeListId);
    const deadline = todo.deadlineDate;

    return (
        <AddDueDateWrapper $mode={context.mode}>
         <StyledInputWrapper>
                <IconButton
                    $type={ deadline.length > 0 ? "addDateActive" : "addDateGrey"}
                    alt="calendar icon" 
                    $margin={"0px 16px 0px 0px"} 
                    $small
                    $mode={context.mode}
                ></IconButton>
                <StyledDueDateInput
                    $mode={context.mode} 
                    placeholder="Add Due Date" 
                    value={deadline}
                    id="dueDateInput"
                    $grey={deadline.length < 0}
                    $purple={deadline.length > 0}
                    onChange={() => {dispatch(toggleChooseDeadlinePanel())}}
                />
            </StyledInputWrapper>
                    { 
                        deadline.length  
                            ?  <IconButton
                                    $type={"crossGrey"}
                                    $margin={"0px 0px 0px 16px"}
                                    alt="grey cross"
                                    $small
                                    onClick={() => {dispatch(deleteDeadline(activeListId, activeTodoId))}}
                                    $mode={context.mode}
                                ></IconButton> : undefined
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
        display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`;
const StyledDueDateInput = styled.input`
    font-family: "Roboto";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px; 
    text-align: flex-start;
    ${props => props.$grey && css `
        color: ${props => props.$mode === "Light" ? "var(--transparent-grey-text-dark-variant)" : "var(--dark-mode-transparent-grey-text-dark-variant)"};
    `}
    ${props => props.$purple && css `
        color: ${props => props.$mode === "Light" ? "var(--primary-purple)" : "var(--dark-mode-primary-purple)"};
    `}
`;

