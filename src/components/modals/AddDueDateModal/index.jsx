import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { AppContext } from "../../../context/context";
import Modal from "../../../ui/Modal";
import { toggleChooseDeadlinePanel, toggleDaedlinePanelAndOpenCalendar, toggleDaedlinePanelAndSetDeadline } from "../../../store/actionCreators/todoPanelActionCreators";
import ListButton from "../../../ui/ListButton";
import { dateOptions } from "../../../context/dateOptions";
import styled from "styled-components";

const AddDueDate = ({ todo }) => {

    const dispatch = useDispatch();
    const context = useContext(AppContext);
    const today = new Date();
    const year = String(today.getFullYear());
    const month = String(today.getMonth());
    const day = String(today.getDate());

    const dateObj = new Date(year, month, day);
    const dateObjTomorrow = new Date(year, month, day + 1);

    const preSetDueDate = (option, today) => {

        if (option === "Pick a Date") {
            dispatch(toggleDaedlinePanelAndOpenCalendar())
        } else if (option === "Tomorrow") {
            dispatch(toggleDaedlinePanelAndSetDeadline(todo.parentListId, todo.id, option, dateObjTomorrow));
        } else {
            dispatch(toggleDaedlinePanelAndSetDeadline(todo.parentListId, todo.id, option, dateObj));
        }
    }

    return (
        <Modal 
            $zIndex={"1"} 
            $boxWidth={"390px"} 
            $boxPadding={"18px 12px 12px 12px"}
            $header={"Add due date"} 
            $mode={context.mode} 
            $onCancelClickHandler={() => {dispatch(toggleChooseDeadlinePanel())}} 
        >
            <StyledConteiner>
                {
                    dateOptions.map(option => (
                        <ListButton 
                            $paddingSmall 
                            $mode={context.mode} 
                            $calendarDay={option !== "Pick a Date"} 
                            $calendarDayArrow={option === "Pick a Date"}
                            onClick={() => preSetDueDate(option, today)}
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