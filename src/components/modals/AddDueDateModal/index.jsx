import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { AppContext } from "../../../context/context";
import Modal from "..";
import { toggleChooseDeadlinePanel } from "../../../store/actionCreators/todoPanelActionCreators";
import ListButton from "../../../ui/ListButton";
import { dateOptions } from "../../../data/dateOptions";
import FlexColumnWrapper from "../../../ui/FlexColumnWrapper";
import { 
    closeDeadlineModalAndOpenCalendar, 
    setDeadlineAndCloseDeadlineModal } from "../../../store/actionCreators/thunks";

const AddDueDate = ({ todoId, listId }) => {

    const dispatch = useDispatch();
    const context = useContext(AppContext);


    const preSetDueDate = (option) => {

        if (option === "Pick a Date") {
            dispatch(closeDeadlineModalAndOpenCalendar())
        } else {
            dispatch(setDeadlineAndCloseDeadlineModal({ 
                listId, 
                todoId, 
                todoDeadlineWord: option, 
            }))
        } 
    }

    return (
        <Modal 
            $mediumSize
            addDueDate
            header={"Add due date"} 
            onCancelClickHandler={() => {dispatch(toggleChooseDeadlinePanel())}} 
        >
            <FlexColumnWrapper $paddingAllSides>
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
