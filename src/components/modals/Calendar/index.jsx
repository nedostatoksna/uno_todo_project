import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { AppContext } from "../../../context/context";
import Modal from "../../../ui/Modal";
import { toggleChooseDeadlinePanel, toggleDaedlinePanelAndOpenCalendar, toggleDaedlinePanelAndSetDeadline } from "../../../store/actionCreators/todoPanelActionCreators";
import ListButton from "../../../ui/ListButton";
import styled from "styled-components";
import DateEditPanel from "./DateEditPanel";
import CalendarSheet from "./CalendarSheet";
import MonthYearSelector from "./MonthYearSelector";
import { threeLettersWeekDays, fullMonths }  from "../../../context/calendar";
import NextPrevSwitcher from "./NextPrevSwitcher";

const Calendar = ({ todo }) => {

    const dispatch = useDispatch();
    const context = useContext(AppContext);
    const selectedDate = todo.deadlineDate;
    console.log(selectedDate);
    const today = new Date();

        const prepareActiveDay = () => {
            let day = selectedDate.slice(4, 7);
            return day;
        }
        const prepareDateForDisplay = () => {
            let dateForDisplay;

            const dayOfTheWeek = threeLettersWeekDays[today.getDay()];
            const month = fullMonths[today.getMonth()].title.slice(0, 3);
            const day = today.getDate();

            if (selectedDate === "Tomorrow") {
                const dayOfTheWeek = threeLettersWeekDays[today.getDay() + 1];
                const month = fullMonths[today.getMonth() + 1].title.slice(0, 3);
                const tomorrow = day + 1;
                dateForDisplay = dayOfTheWeek + ", " + month + " " + tomorrow;
            } else {
                dateForDisplay = dayOfTheWeek + ", " + month + " " + day;
            }
            return dateForDisplay;
        }
        const prepareMonthForDisplay = () => {
            let activeMonth;
            if (selectedDate === "Tomorrow") {
                activeMonth = fullMonths[today.getMonth() + 1]; 
            } else if (selectedDate.length && selectedDate !== "Next Week") {
                let shortActiveMonth = selectedDate.slice(-3);
                for (let i = 0; i < fullMonths.length; i++) {
                    let refference = fullMonths[i].title.slice(0, 3);
                    if (shortActiveMonth === refference) {
                        activeMonth = fullMonths[i];
                    }
                }
            } else {
                activeMonth = fullMonths[today.getMonth()];
            }
            return activeMonth;
        }
        console.log(prepareDateForDisplay());
        console.log(prepareMonthForDisplay());

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
                <StyledConteinerSwitchers>
                    <MonthYearSelector activeMonth={prepareMonthForDisplay()} />
                    <NextPrevSwitcher />
                </StyledConteinerSwitchers>
                <CalendarSheet activeMonth={prepareMonthForDisplay()} activeDay={prepareActiveDay()}  />
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