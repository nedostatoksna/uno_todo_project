import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { AppContext } from "../../context/context";
import styled, { css } from "styled-components";
import IconButton from "../../ui/IconButton";
import { 
    fullMonths, 
    threeLettersWeekDays } from "../../data/calendar";
import { toggleDeletingTodo } from "../../store/actionCreators/todoPanelActionCreators";
import FlexRowWrapper from "../../ui/FlexRowWrapper";
import { closeTodoEditPanelAndClearActiveTodoId } from "../../store/actionCreators/thunks";

const TodoEditFooter = ({ todo }) => {

    const context = useContext(AppContext);
    const dispatch = useDispatch();

    const prepareDateStringForDisplay = (date) => {
        let dateForDisplay;
        const dayOfTheWeek = threeLettersWeekDays[date.getDay()];
        const month = fullMonths[date.getMonth()].title.slice(0, 3);
        const day = date.getDate();
        dateForDisplay = dayOfTheWeek + ", " + month + " " + day;
        return dateForDisplay;
    }

    return (
        <FlexRowWrapper $center $spaceBetween>
            <IconButton
                onClick={() => {dispatch(closeTodoEditPanelAndClearActiveTodoId())}}
                $type={"arrowLeft"}
                alt="arrow left" 
                $large
                $mode={context.mode}
            ></IconButton>
            <StyledText $mode={context.mode}>
                Created {prepareDateStringForDisplay(todo.createDate)}
            </StyledText>
            <IconButton
                onClick={() => {dispatch(toggleDeletingTodo())}}
                $type={"deleteGrey"}
                alt="garbage bin outline" 
                $large
                $mode={context.mode}
            ></IconButton>
        </FlexRowWrapper>
    )
};

export default TodoEditFooter;

const StyledText = styled.p`
    font-size: 12px;
    font-weight: 600;
    line-height: 16px; 
    letter-spacing: 0.4px;
    ${props => props.$mode === "Light" && css`
        color: var(--transparent-grey-text-dark-variant);
    `} 
    ${props => props.$mode === "Dark" && css`
        color: var(--dark-mode-transparent-grey-text-dark-variant);
    `} 
`;