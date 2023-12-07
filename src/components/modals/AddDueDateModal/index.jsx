import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { AppContext } from "../../../context/context";
import Modal from "../../../ui/Modal";
import { toggleChooseDeadlinePanel, 
         toggleDaedlinePanelAndOpenCalendar, 
         toggleDaedlinePanelAndSetDeadline } from "../../../store/actionCreators/todoPanelActionCreators";
import ListButton from "../../../ui/ListButton";
import { dateOptions } from "../../../data/dateOptions";
import styled from "styled-components";

const AddDueDate = ({ todoId, listId }) => {

    const dispatch = useDispatch();
    const context = useContext(AppContext);
    const today = new Date();
    const dateObjTomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
    const dateObjNextWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7);

    const preSetDueDate = (option) => {

        if (option === "Pick a Date") {
            dispatch(toggleDaedlinePanelAndOpenCalendar())
        } else if (option === "Tomorrow") {
            dispatch(toggleDaedlinePanelAndSetDeadline(listId, todoId, option, dateObjTomorrow));
        } else if (option === "Next Week") {
            dispatch(toggleDaedlinePanelAndSetDeadline(listId, todoId, option, dateObjNextWeek));
        } else {
            dispatch(toggleDaedlinePanelAndSetDeadline(listId, todoId, option, today));
        }
    }

    return (
        <Modal 
            boxWidth={"390px"} 
            boxPadding={"18px 12px 12px 12px"}
            header={"Add due date"} 
            onCancelClickHandler={() => {dispatch(toggleChooseDeadlinePanel())}} 
        >
            <StyledConteiner>
                {
                    dateOptions.map(option => (
                        <ListButton 
                            key={option}
                            $paddingSmall 
                            $mode={context.mode} 
                            $calendarDay={option !== "Pick a Date"} 
                            $calendarDayArrow={option === "Pick a Date"}
                            onClick={() => preSetDueDate(option)}
                            >
                                {option}
                            </ListButton>
                    ))
                }
            </StyledConteiner>
        </Modal>
    )
};

export default AddDueDate;

const StyledConteiner = styled.div`
    padding: 12px;
    display: flex;
    flex-direction: column;
`;