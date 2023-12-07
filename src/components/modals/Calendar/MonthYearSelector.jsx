import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { css } from "styled-components";
import { AppContext } from "../../../context/context";
import { fullMonths }  from "../../../data/calendar";
import { changeSelectedMonth } from "../../../store/actionCreators/calendarActionCreators";
import arrowDropDown from "../../../images/arrowDropDown.svg";
import arrowDropDownForDark from "../../../images/arrowDropDownForDark.svg";

const MonthYearSelector = ({ activeMonth }) => {

    const context = useContext(AppContext);
    const year = useSelector(state => state.calendarUI.activeYear);
    const dispatch = useDispatch();

    return (
        <SelectorWrapper>
                <StyledSelector 
                    $mode={context.mode}  
                    value={activeMonth}
                    onChange={(e) => {dispatch(changeSelectedMonth(e.target.value))}}
                    name={"months"}
                >
                    {
                        fullMonths.map(month => (
                            <StyledOption 
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
    font-weight: 600;
    color: ${props => props.$mode === "Light" ? "var(--primary-purple)" : "var(--dark-mode-primary-purple)"};
    border: none;
    background: transparent;
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
    font-weight: 600;
    color: ${props => props.$mode === "Light" ? "var(--black)" : "var(--dark-mode-white-text)"};
    background-color: ${props => props.$mode === "Light" ? "var(--white)" : "var(--dark-mode-background)"};
    text-align: start;
`;
