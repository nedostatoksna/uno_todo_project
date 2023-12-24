import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { AppContext } from "../../../context/context";
import { oneLettersWeekDays } from "../../../data/calendar";
import FlexRowWrapper from "../../../ui/FlexRowWrapper";

const WeekDays = () => {
    
    let weekDayId = 0;
    const context = useContext(AppContext);

    return (
        <FlexRowWrapper as="ul" $spaceBetween>
        {
            oneLettersWeekDays.map(day => (
                <StyledWeekDay 
                    key={weekDayId++} 
                    $mode={context.mode}
                >
                    {day}
                </StyledWeekDay>
            ))
        } 
        </FlexRowWrapper>
    )
};

export default WeekDays;

const StyledWeekDay = styled.li`
    padding: 8px 15px;
    ${props => props.$mode === "Light" && css`
        color: var(--transparent-grey-text-dark-variant);
    `} 
    ${props => props.$mode === "Dark" && css`
        color: var(--dark-mode-transparent-grey-text-dark-variant);
    `} 
`;


