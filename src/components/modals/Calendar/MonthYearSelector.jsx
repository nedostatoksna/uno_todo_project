import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { AppContext } from "../../../context/context";
import { fullMonths }  from "../../../context/calendar";
import { changeSelectedMonth } from "../../../store/actionCreators/calendarActionCreators";

const MonthYearSelector = ({ activeMonth }) => {

    const context = useContext(AppContext);
    const year = useSelector(state => state.calendarUI.activeYear);
    const dispatch = useDispatch();

    return (
        <SelectorWrapper>
                <StyledSelector 
                    $mode={context.mode}  
                    onChange={(e) => dispatch(changeSelectedMonth(e.target.value))}
                    name={"months"}
                >
                    {
                        fullMonths.map(month => (
                            <StyledOption 
                                selected={month.title === activeMonth} 
                                $mode={context.mode} 
                                value={month.title}
                                key={month.id}
                            >
                                {month.title} 
                                {year}
                            </StyledOption>
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
    align-items: center;
    justify-content: space-between;
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
