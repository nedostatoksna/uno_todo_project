import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppContext } from "../../../context/context";
import Modal from "../../../ui/Modal";
import styled from "styled-components";
import DateEditPanel from "./DateEditPanel";
import CalendarSheet from "./CalendarSheet";
import MonthYearSelector from "./MonthYearSelector";
import { fullMonths }  from "../../../context/calendar";
import NextPrevSwitcher from "./NextPrevSwitcher";
import { toggleIsShowingCalendar } from "../../../store/actionCreators/todoPanelActionCreators";
import { CalendarContext } from "../../../context/calendarContext";

const Calendar = ({ todo }) => {

    const dispatch = useDispatch();
    const context = useContext(AppContext);
    const activeMonth = useSelector(state => state.calendarUI.activeMonth);

        const findActiveMonthId = () => {
            let activeMonthId;
            for (let i = 0; i < fullMonths.length; i++) {
               if (fullMonths[i].title === activeMonth) {
                    activeMonthId = fullMonths[i].id
                }
            }
            return activeMonthId
        }

    return (
        <Modal 
            $zIndex={"1"} 
            $boxWidth={"328px"} 
            $boxPadding={"16px 4px 4px 4px"}
            $header={"select date"} 
            $smallUppercase
            $okButton
            $buttonText={"Ok"}
            $mode={context.mode} 
            $onCancelClickHandler={() => {dispatch(toggleIsShowingCalendar())}} 
            $onСonfirmationClick={() => {dispatch(toggleIsShowingCalendar())}} 
        >
            <StyledConteiner>
            <DateEditPanel />
                <StyledConteinerSwitchers>
                    <MonthYearSelector activeMonth={activeMonth} />
                    <NextPrevSwitcher activeMonthId={findActiveMonthId()} />
                </StyledConteinerSwitchers>
                <CalendarSheet activeMonthId={findActiveMonthId()} todo={todo} />
            </StyledConteiner>
        </Modal>
    )
};

export default Calendar;

const StyledConteiner = styled.div`
    display: flex;
    flex-direction: column;
`;
const StyledConteinerSwitchers = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 8px 12px 8px 20px;
`;