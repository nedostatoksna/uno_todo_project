import React, { useContext } from "react";
import styled from "styled-components";
import IconButton from "../../../ui/IconButton";
import { AppContext } from "../../../context/context";

const DateEditPanel = ({dateForDisplayString}) => {

    const context = useContext(AppContext);

    return (
        <DateEditPanelWrapper>
                <DateInput 
                    $mode={context.mode}  
                    value={dateForDisplayString}
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


