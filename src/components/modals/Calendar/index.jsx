import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { AppContext } from "../../../context/context";
import Modal from "../../../ui/Modal";
import { toggleChooseDeadlinePanel, toggleDaedlinePanelAndOpenCalendar, toggleDaedlinePanelAndSetDeadline } from "../../../store/actionCreators/todoPanelActionCreators";
import ListButton from "../../../ui/ListButton";
import { dateOptions } from "../../../context/dateOptions";
import styled from "styled-components";

const Calendar = () => {

    const dispatch = useDispatch();
    const context = useContext(AppContext);

    // const prepDate = (element) => {
    //     let  result;
    //     if (element.length === 1) {
    //         result = "0" + element
    //     } else {
    //         result = element
    //     }
    //     return result
    // }
        // const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        // const dueDate = new Date();

        // const dayOfTheWeek = dueDate.toDateString().slice(0, 3);
        // const month = months[dueDate.getMonth()];
        // const day = dueDate.getDate();
        // const dd = prepDate(day);
    // }

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
            
            </StyledConteiner>

        </Modal>
    )
};

export default Calendar;

const StyledConteiner = styled.div`
    padding: 12px;
    display: flex;
    flex-direction: column;
`;