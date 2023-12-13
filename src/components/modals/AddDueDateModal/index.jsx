import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { AppContext } from "../../../context/context";
import Modal from "../../../ui/Modal";
import { toggleChooseDeadlinePanel, 
         toggleDaedlinePanelAndOpenCalendar, 
         toggleDaedlinePanelAndSetDeadline } from "../../../store/actionCreators/todoPanelActionCreators";
import ListButton from "../../../ui/ListButton";
import { dateOptions } from "../../../data/dateOptions";
import FlexColumnWrapper from "../../../styled/FlexColumnWrapper";
import { closeDeadlineModalAndOpenCalendar, setDeadlineAndCloseDeadlineModal } from "../../../store/actionCreators/thunks";

const AddDueDate = ({ todoId, listId }) => {

    const dispatch = useDispatch();
    const context = useContext(AppContext);
    const today = new Date();
    const dateObjTomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
    const dateObjNextWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7);

    const preSetDueDate = (option) => {

        if (option === "Pick a Date") {
            dispatch(closeDeadlineModalAndOpenCalendar())
        } else if (option === "Tomorrow") {
            dispatch(setDeadlineAndCloseDeadlineModal({ listId, todoId, deadline: option, deadlineObj: dateObjTomorrow }));
        } else if (option === "Next Week") {
            dispatch(setDeadlineAndCloseDeadlineModal({ listId, todoId, deadline: option, deadlineObj: dateObjNextWeek }));
        } else {
            dispatch(setDeadlineAndCloseDeadlineModal({ listId, todoId, deadline: option, deadlineObj: today }));
        }
    }

    return (
        <Modal 
            boxWidth={"390px"} 
            boxPadding={"18px 12px 12px 12px"}
            header={"Add due date"} 
            onCancelClickHandler={() => {dispatch(toggleChooseDeadlinePanel())}} 
        >
            <FlexColumnWrapper $padding={"12px"}>
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
            </FlexColumnWrapper>
        </Modal>
    )
};

export default AddDueDate;
