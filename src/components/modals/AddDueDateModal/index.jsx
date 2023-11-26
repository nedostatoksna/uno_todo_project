import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { AppContext } from "../../../context/context";
import Modal from "../../../ui/Modal";
import { toggleChooseDeadlinePanel } from "../../../store/actionCreators/todoPanelActionCreators";
import ListButton from "../../../ui/ListButton";
import { dateOptions } from "../../../context/dateOptions";
import styled from "styled-components";

const AddDueDate = () => {

    const dispatch = useDispatch();
    const context = useContext(AppContext);

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
                    <ListButton $paddingSmall $mode={context.mode} $calendarDay={option !== "Pick a Date"} $calendarDayArrow={option === "Pick a Date"}>{option}</ListButton>
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