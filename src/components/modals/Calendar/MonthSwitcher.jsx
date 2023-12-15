import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import IconButton from "../../../ui/IconButton";
import { AppContext } from "../../../context/context";
import { changeSelectedMonth } from "../../../store/actionCreators/calendarActionCreators";
import { fullMonths } from "../../../data/calendar";
import FlexRowWrapper from "../../../ui/FlexRowWrapper";
import { switchMonthAndYear } from "../../../store/actionCreators/thunks";

const MonthSwitcher = ({ activeMonthId }) => {

    const context = useContext(AppContext);
    const year = useSelector(state => state.calendarUI.activeYear);
    const dispatch = useDispatch();

    const preSwitchToPrev = () => {
        let monthTitle;
        if (activeMonthId - 1 < 0) {
            monthTitle =  fullMonths[11].title;
            dispatch(switchMonthAndYear({ activeMonth: monthTitle, activeYear: year - 1 }))
        } else {
            monthTitle =  fullMonths[activeMonthId - 1].title;
            dispatch(changeSelectedMonth({ activeMonth: monthTitle }));
        }
    }

    const preSwitchToNext = () => {
        let monthTitle;
        if (activeMonthId + 1 > 11) {
            monthTitle =  fullMonths[0].title;
            dispatch(switchMonthAndYear({ activeMonth: monthTitle, activeYear:  year + 1 }))
        } else {
            monthTitle =  fullMonths[activeMonthId + 1].title;
            dispatch(changeSelectedMonth({ activeMonth: monthTitle }));
        }
    }

    return (
        <FlexRowWrapper $center>
                <IconButton onClick={() => preSwitchToPrev()} $mode={context.mode} $type={"arrowLeft"} $large ></IconButton>
                <IconButton onClick={() => preSwitchToNext()} $mode={context.mode} $type={"arrowRight"} $large ></IconButton>
        </FlexRowWrapper>
    )
};

export default MonthSwitcher;



