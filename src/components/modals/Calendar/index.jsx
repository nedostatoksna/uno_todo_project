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

const Calendar = ({ todo }) => {

    const dispatch = useDispatch();
    const context = useContext(AppContext);
    const selectedDateString = todo.deadline.deadlineString;
    const selectedDateObj = todo.deadline.deadlineObj;
    const activeMonth = useSelector(state => state.calendarUI.activeMonth);
    const today = new Date();

        const prepareActiveDay = () => {
            let activeDay = selectedDateObj 
                ? selectedDateObj.getDate()
                : today
            return activeDay
        }

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
            $onСonfirmationClick={() => {}} 
        >
            <StyledConteiner>
            <DateEditPanel dateString={selectedDateString} selectedDateObj={selectedDateObj}/>
                <StyledConteinerSwitchers>
                    <MonthYearSelector activeMonth={activeMonth} />
                    <NextPrevSwitcher activeMonthId={findActiveMonthId()} />
                </StyledConteinerSwitchers>
                <CalendarSheet activeTodo={todo} activeDay={prepareActiveDay()} activeMonthId={findActiveMonthId()} />
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