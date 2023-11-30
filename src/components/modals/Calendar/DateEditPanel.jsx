import React, { useContext } from "react";
import styled from "styled-components";
import IconButton from "../../../ui/IconButton";
import { AppContext } from "../../../context/context";
import { fullMonths, threeLettersWeekDays } from "../../../context/calendar";

const DateEditPanel = ({ dateString, selectedDateObj }) => {

    const context = useContext(AppContext);

            const prepareDateStringForDisplay = () => {

            let dateForDisplay;
            const today = new Date();
            const dayOfTheWeek = threeLettersWeekDays[today.getDay()];
            const month = fullMonths[today.getMonth()].title.slice(0, 3);
            const day = today.getDate();

            if (dateString.length) {

                if (dateString === "Tomorrow" || dateString === "Today") {
                    const dayOfTheWeek = threeLettersWeekDays[selectedDateObj.getDay()];
                    const month = fullMonths[selectedDateObj.getMonth()].title.slice(0, 3);
                    const day = selectedDateObj.getDate();
                    dateForDisplay = dayOfTheWeek + ", " + month + " " + day;
                } else if (dateString !== "Next Week") {
                    dateForDisplay = dateString;
                }
            } else {
                dateForDisplay = dayOfTheWeek + ", " + month + " " + day;
            }
            return dateForDisplay;
        }

    return (
        <DateEditPanelWrapper>
                <DateInput 
                    $mode={context.mode}  
                    value={prepareDateStringForDisplay()}
                    id="dateInput"
                    disabled />
                <IconButton $mode={context.mode} $type={"editGrey"} $large ></IconButton>
        </DateEditPanelWrapper>
    )
};

export default DateEditPanel;

const DateEditPanelWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding: 16px 14px 16px 20px;
`;
const DateInput = styled.input`
    font-family: "Roboto";
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px; 
    color: ${props => props.$mode === "Light" ? "var(--black)" : "var(--dark-mode-white-text)"};
    background-color: transparent;
    width: calc(100% - 88px);
`;


