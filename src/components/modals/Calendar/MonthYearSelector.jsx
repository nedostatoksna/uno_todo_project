import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { css } from "styled-components";
import { AppContext } from "../../../context/context";
import { fullMonths }  from "../../../context/calendar";
import { changeSelectedMonth } from "../../../store/actionCreators/calendarActionCreators";
import arrowDropDown from "../../../images/arrowDropDown.svg";
import arrowDropDownForDark from "../../../images/arrowDropDownForDark.svg";
import { useState } from "react";

const MonthYearSelector = ({ activeMonth }) => {

    const context = useContext(AppContext);
    const year = useSelector(state => state.calendarUI.activeYear);
    const selectedMonth = useSelector(state => state.calendarUI.activeMonth);
    const dispatch = useDispatch();
    const [value, setValue] = useState(selectedMonth);

    const preChangeSelectedMonth = () => {
        if (value !== selectedMonth) {
            dispatch(changeSelectedMonth(value))
        }
    }

    return (
        <SelectorWrapper onClick={() => preChangeSelectedMonth()}>
                <StyledSelector 
                    $mode={context.mode}  
                    onChange={(e) => setValue(e.target.value)}
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
                                {month.title + " " + year} 
                            </StyledOption>
                        ))
                    }
                </StyledSelector>
                <StyledImg  $mode={context.mode} ></StyledImg>
        </SelectorWrapper>
    )
};

export default MonthYearSelector;

const SelectorWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: fit-content;
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
const StyledImg = styled.div`

    background-repeat: no-repeat;
    background-position: center right;
    width: 24px;
    height: 24px;

    ${props => props.$mode === "Light" && css`
    background-image: url(${arrowDropDown});
    `};
    ${props => props.$mode === "Dark" && css`
        background-image: url(${arrowDropDownForDark});
    `};
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
