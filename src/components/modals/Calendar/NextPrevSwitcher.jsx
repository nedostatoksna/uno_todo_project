import React, { useContext } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import IconButton from "../../../ui/IconButton";
import { AppContext } from "../../../context/context";
import { 
        switchToNextMonth, 
        switchToNextMonthAndYear, 
        switchToPrevMonth, 
        switchToPrevMonthAndYear } from "../../../store/actionCreators/calendarActionCreators";
import { fullMonths } from "../../../data/calendar";

const NextPrevSwitcher = ({ activeMonthId }) => {

    const context = useContext(AppContext);
    const year = useSelector(state => state.calendarUI.activeYear);
    const dispatch = useDispatch();

    const preSwitchToPrev = () => {
        let monthTitle;
        if (activeMonthId - 1 < 0) {
            monthTitle =  fullMonths[11].title;
            dispatch(switchToPrevMonthAndYear(monthTitle, year - 1))
        } else {
            monthTitle =  fullMonths[activeMonthId - 1].title;
            dispatch(switchToPrevMonth(monthTitle));
        }
    }

    const preSwitchToNext = () => {
        let monthTitle;
        if (activeMonthId + 1 > 11) {
            monthTitle =  fullMonths[0].title;
            dispatch(switchToNextMonthAndYear(monthTitle, year + 1))
        } else {
            monthTitle =  fullMonths[activeMonthId + 1].title;
            dispatch(switchToNextMonth(monthTitle));
        }
    }

    return (
        <SwitcherWrapper>
                <IconButton onClick={() => preSwitchToPrev()} $mode={context.mode} $type={"arrowLeft"} $large ></IconButton>
                <IconButton onClick={() => preSwitchToNext()} $mode={context.mode} $type={"arrowRight"} $large ></IconButton>
        </SwitcherWrapper>
    )
};

export default NextPrevSwitcher;

const SwitcherWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;


