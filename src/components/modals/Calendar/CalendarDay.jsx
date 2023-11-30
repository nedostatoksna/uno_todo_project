import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { AppContext } from "../../../context/context";

const CalendarDay = ({day}) => {
    
    const context = useContext(AppContext);



    return (
        <Wrapper $prevNext={!day.activeMonth} $mode={context.mode}>
        {day.date}

        </Wrapper>
    )
};

export default CalendarDay;

const Wrapper = styled.li`
    display: flex;
    padding: 2px;
    width: 40px;
    height: 40px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "Roboto";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0.5px;
    color: ${props => props.$mode === "Light" ? "var(--black)" : "var(--dark-mode-white-text)"};
             
    ${props => props.$mode === "Light" && css`
    
        ${props => props.$prevNext && css `
            color: var(--transparent-grey-text-medium-variant);
        `}
    `}
    ${props => props.$mode === "Dark" && css`
    
        ${props => props.$prevNext && css `
            color: var(--dark-mode-transparent-grey-text-medium-variant);
        `}
    `}
`;