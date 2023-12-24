import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { AppContext } from "../../context/context";
import FlexColumnWrapper from "../../ui/FlexColumnWrapper.jsx";
import FlexRowWrapper from "../../ui/FlexRowWrapper.jsx";

const TodoContent = ({ todo }) => {

    const context = useContext(AppContext);
    const deadLineForDisplay = todo.deadline.deadlineString;

    return (
        <FlexColumnWrapper 
            $center 
            $flexStart 
            $paddingTopBottomSmall
        >
            <StyledItemTitle $mode={context.mode}>
                {todo.title}
            </StyledItemTitle>
            <FlexRowWrapper>
                <StyledText $grey $mode={context.mode}>
                    {deadLineForDisplay}
                </StyledText>
                { deadLineForDisplay 
                    && todo.note.length 
                    && <StyledText $grey $mode={context.mode}>-</StyledText> 
                }
                <StyledText $coral $mode={context.mode}>
                    {todo.note}
                </StyledText>
            </FlexRowWrapper>
        </FlexColumnWrapper>
    )
};

export default TodoContent;

const StyledItemTitle = styled.p`
    font-size: 16px;
    font-weight: 600;
    line-height: 24px; 
    ${props => props.$mode === "Light" && css`
        color: var(--black);
    `} 
    ${props => props.$mode === "Dark" && css`
        color: var(--dark-mode-white-text);
    `} 
`;
const StyledText = styled.p`
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0.25px;
    padding: 2px;
    ${props => props.$mode === "Light" && css `
        ${props => props.$grey && css `
            color: var(--transparent-grey-text-dark-variant);
        `}
        ${props => props.$coral && css `
            color: var(--coral);
        `}
    `}
    ${props => props.$mode === "Dark" && css `
        ${props => props.$grey && css `
            color: var(--dark-mode-transparent-grey-text-dark-variant);
        `}
        ${props => props.$coral && css `
            color: var(--dark-mode-coral);
        `}
    `}
`;

