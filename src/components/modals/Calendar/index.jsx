import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppContext } from "../../../context/context";
import Modal from "../../../ui/Modal";
import { toggleChooseDeadlinePanel, toggleDaedlinePanelAndOpenCalendar, toggleDaedlinePanelAndSetDeadline } from "../../../store/actionCreators/todoPanelActionCreators";
import ListButton from "../../../ui/ListButton";
import styled from "styled-components";
import DateEditPanel from "./DateEditPanel";
import CalendarSheet from "./CalendarSheet";
import MonthYearSelector from "./MonthYearSelector";
import { threeLettersWeekDays, shortMonths }  from "../../../context/calendar";

const Calendar = ({ todo }) => {

    const dispatch = useDispatch();
    const context = useContext(AppContext);
    const selectedDate = todo.deadlineDate;

    const prepDayForDate = (element) => {
        let  result;
        if (element.length === 1) {
            result = "0" + element
        } else {
            result = element
        }
        return result
    }

        const prepareDateForDisplay = () => {
            const today = new Date();
            let dateForDisplay;

            const dayOfTheWeek = threeLettersWeekDays[today.getDay()];
            const month = shortMonths[today.getMonth()];
            const day = today.getDate();
            const dd = prepDayForDate(day);

            if (selectedDate === "Tomorrow") {
                const dayOfTheWeek = threeLettersWeekDays[today.getDay() + 1];
                const month = shortMonths[today.getMonth() + 1];
                const tomorrow = day + 1;
                const tt = prepDayForDate(tomorrow);
                dateForDisplay = dayOfTheWeek + ", " + month + " " + tt;

            } else {
                dateForDisplay = dayOfTheWeek + ", " + month + " " + dd;
            }
            return dateForDisplay;
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
            $onCancelClickHandler={() => {}} 
            $onСonfirmationClick={() => {}} 
        >
            <StyledConteiner>
                <DateEditPanel dateForDisplayString={prepareDateForDisplay()}/>
                <MonthYearSelector />
                <CalendarSheet />
            
            </StyledConteiner>

        </Modal>
    )
};

export default Calendar;

const StyledConteiner = styled.div`
    display: flex;
    flex-direction: column;
`;