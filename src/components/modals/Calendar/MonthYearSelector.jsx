import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { css } from "styled-components";
import { AppContext } from "../../../context/context";
import { fullMonths }  from "../../../data/calendar";
import { changeSelectedMonth } from "../../../store/actionCreators/calendarActionCreators";
import arrowDropDown from "../../../images/arrowDropDown.svg";
import arrowDropDownForDark from "../../../images/arrowDropDownForDark.svg";
import FlexRowWrapper from "../../../ui/FlexRowWrapper";

const MonthYearSelector = ({ activeMonth }) => {

    const context = useContext(AppContext);
    const year = useSelector(state => state.calendarUI.activeYear);
    const dispatch = useDispatch();

    return (
        <FlexRowWrapper $spaceBetween $center $width={"fit-content"}>
            <StyledSelector 
                $mode={context.mode}  
                value={activeMonth}
                onChange={(e) => {dispatch(changeSelectedMonth({ activeMonth: e.target.value }))}}
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
        </FlexRowWrapper>
    )
};

export default MonthYearSelector;

const StyledSelector = styled.select`
    font-weight: 600;
    border: none;
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: center right;
    padding-right: 24px;
    ${props => props.$mode === "Light" && css`
        color: var(--primary-purple);
        background-image: url(${arrowDropDown});
    `};
    ${props => props.$mode === "Dark" && css`
        color: var(--dark-mode-primary-purple);
        background-image: url(${arrowDropDownForDark});
    `};
`;
const StyledOption = styled.option`
    font-weight: 600;
    text-align: start;
    ${props => props.$mode === "Light" && css`
        color: var(--black);
        background-color: var(--white);
    `};
    ${props => props.$mode === "Dark" && css`
        color: var(--dark-mode-white-text);
        background-color: var(--dark-mode-background);
    `};
`;
