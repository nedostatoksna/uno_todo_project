import React, { useContext } from "react";
import styled from "styled-components";
import IconButton from "../../../ui/IconButton";
import { AppContext } from "../../../context/context";
import { useDispatch } from "react-redux";
import { switchToNextMonth, switchToPrevMonth } from "../../../store/actionCreators/calendarActionCreators";
import { fullMonths } from "../../../context/calendar";

const NextPrevSwitcher = ({ activeMonthId }) => {

    const context = useContext(AppContext);
    const dispatch = useDispatch();
    const preSwitchToPrev = () => {
        let monthTitle;
        if (activeMonthId - 1 < 0) {
            monthTitle =  fullMonths[11].title;
        } else {
            monthTitle =  fullMonths[activeMonthId - 1].title;
        }
        dispatch(switchToPrevMonth(monthTitle))
    }
    const preSwitchToNext = () => {
        let monthTitle;
        if (activeMonthId + 1 > 11) {
            monthTitle =  fullMonths[0].title;
        } else {
            monthTitle =  fullMonths[activeMonthId + 1].title;
        }
        dispatch(switchToNextMonth(monthTitle))
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


