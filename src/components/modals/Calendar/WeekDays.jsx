import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../../context/context";
import { oneLettersWeekDays } from "../../../data/calendar";
import FlexRowWrapper from "../../../styled/FlexRowWrapper";

const WeekDays = () => {
    
    let weekDayId = 0;
    const context = useContext(AppContext);

    return (
        <FlexRowWrapper as="ul" $spaceBetween>
        {
            oneLettersWeekDays.map(day => (
                <StyledWeekDay key={weekDayId++} $mode={context.mode}>{day}</StyledWeekDay>
            ))
        } 
        </FlexRowWrapper>
    )
};

export default WeekDays;

const StyledWeekDay = styled.li`
    color: ${props => props.$mode === "Light" ? "var(--transparent-grey-text-dark-variant)" : "var(--dark-mode-transparent-grey-text-dark-variant)"};
    padding: 8px 15px;
`;


