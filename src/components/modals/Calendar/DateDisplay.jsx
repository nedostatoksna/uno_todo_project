import React, { useContext } from "react";
import styled, { css } from "styled-components";
import IconButton from "../../../ui/IconButton";
import { AppContext } from "../../../context/context";
import FlexRowWrapper from "../../../ui/FlexRowWrapper";
import { prepareDateStringForDisplay } from "../../../helpers/calendarRenderPrep";

const DateDisplay = () => {

    const context = useContext(AppContext);
    const today = new Date();
    
    return (
        <FlexRowWrapper 
            $flexStart 
            $spaceBetween 
            $paddingTopBottomLarge 
            $paddingRightMedium 
            $paddingLeft
        >
            <StyledDate $mode={context.mode}>
                {prepareDateStringForDisplay(today)}
            </StyledDate>
            <IconButton 
                $mode={context.mode} 
                $type={"editGrey"} 
                $large 
            ></IconButton>
        </FlexRowWrapper>
    )
};

export default DateDisplay;
  
const StyledDate= styled.p`
    font-size: 32px;
    line-height: 40px; 
    ${props => props.$mode === "Light" && css`
        color: var(--black);
    `}
    ${props => props.$mode === "Dark" && css`
        color: var(--dark-mode-white-text);
    `}
    background-color: transparent;
    width: calc(100% - 88px);
`;


