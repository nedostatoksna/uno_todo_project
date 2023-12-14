import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { AppContext } from "../../context/context";
import styled, { css } from "styled-components";
import { deleteDeadline } from "../../store/actionCreators/dataListActionCreators.js";
import { toggleChooseDeadlinePanel } from "../../store/actionCreators/todoPanelActionCreators";
import IconButton from "../../ui/IconButton";
import FlexRowWrapper from "../../ui/FlexRowWrapper.jsx";

const AddDueDate = ({ todo }) => {

    const dispatch = useDispatch();
    const context = useContext(AppContext);
    const deadlineString = todo.deadline.deadlineString;

    return (
        <FlexRowWrapper $spaceBetween $center $margin={"12px 0px"} $paddingTopBottomSmall>
         <FlexRowWrapper $flexStart $center>
                <IconButton
                    $type={ deadlineString.length ? "addDateActive" : "addDateGrey"}
                    alt="calendar icon" 
                    $marginRightLarge
                    $small
                    $mode={context.mode}
                    onClick={() => {dispatch(toggleChooseDeadlinePanel())}}
                ></IconButton>
                <StyledDueDateInput
                    $mode={context.mode} 
                    placeholder="Add Due Date" 
                    value={deadlineString}
                    id="dueDateInput"
                    $grey
                    $purple={deadlineString.length}
                    disabled
                />
            </FlexRowWrapper>
                    { 
                        deadlineString.length
                            ?  <IconButton
                                    $type={"crossGrey"}
                                    $marginLeftLarge
                                    alt="grey cross"
                                    $small
                                    onClick={() => {dispatch(deleteDeadline({ listId: todo.parentListId, todoId: todo.id }))}}
                                    $mode={context.mode}
                                ></IconButton> : undefined
                    }

        </FlexRowWrapper>
    )
};

export default AddDueDate;
 
const StyledDueDateInput = styled.input`
    text-align: flex-start;
    width: calc(100% - 80px);
    background: transparent;
    ${props => props.$grey && css `
        color: ${props => props.$mode === "Light" ? "var(--transparent-grey-text-dark-variant)" : "var(--dark-mode-transparent-grey-text-dark-variant)"};
    `}
    ${props => props.$purple && css `
        color: ${props => props.$mode === "Light" ? "var(--primary-purple)" : "var(--dark-mode-primary-purple)"};
    `}
`;

