import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import IconButton from "../../../ui/IconButton";
import { AppContext } from "../../../context/context";

const CalendarSheet = () => {
    
    const dispatch = useDispatch();
    const context = useContext(AppContext);

    return (
        <>
            
        </>
    )
};

export default CalendarSheet;

const DateEditPanelWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding: 12px 0px;
`;
const StyledHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding: 12px 0px;
`;


