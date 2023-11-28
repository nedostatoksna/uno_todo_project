import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { AppContext } from "../../../context/context";
import { fullMonths }  from "../../../context/calendar";

const MonthYearSelector = () => {
    const context = useContext(AppContext);
    const today = new Date();
    const year = today.getFullYear();
    const activeMonth = fullMonths[today.getMonth()];
    const stringForSelector = activeMonth + " " + year;

    return (
        <SelectorWrapper>
                <StyledSelector 
                    $mode={context.mode}  
                >
                    {
                        fullMonths.map(month => (
                            <StyledOption selected={month === activeMonth} $mode={context.mode} value={month + year}>{month + " " + year}</StyledOption>
                        ))
                    }
                    

                </StyledSelector>
        </SelectorWrapper>
    )
};

export default MonthYearSelector;

const SelectorWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding: 16px 14px 16px 20px;
`;
const StyledSelector = styled.select`
    font-family: "Roboto";
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px; 
    letter-spacing: 0.25px;
    color: ${props => props.$mode === "Light" ? "var(--primary-purple)" : "var(--dark-mode-primary-purple)"};
    border: none;
`;
const StyledOption = styled.option`
    font-family: "Roboto";
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px; 
    letter-spacing: 0.25px;
    color: ${props => props.$mode === "Light" ? "var(--black)" : "var(--dark-mode-white-text)"};
`;
