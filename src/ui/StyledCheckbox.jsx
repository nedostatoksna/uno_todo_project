import React from "react";
import styled, { css } from "styled-components";

const Checkbox = ( props ) => { 
    return (
        <>
            <StyledCheckbox type="checkbox" {...props}/>
        </>
    )
};

export default Checkbox;

const StyledCheckbox = styled.button` 
    color: ${props => props.$color || "#fff"};
    font-family: "Roboto";
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px; 
    letter-spacing: 0.1px;
    height: 40px;
    border-radius: 20px;
    width: ${props => props.$width || undefined};
    background-repeat: no-repeat;   

    ${props => props.$primary && css `
        background-color: ${props => props.$mode === "Light" ? "#5946D2" : "#9373FF"};
        padding: 10px 24px;
    `}
`;