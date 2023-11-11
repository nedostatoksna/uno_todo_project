import React from "react";
import styled from "styled-components";

const Label = ( props ) => {

    return (
        <>
            <StyledLabel {...props}>{props.children}</StyledLabel>
        </>
    )
};
export default Label;

const StyledLabel = styled.label` 
    font-family: "Roboto";
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 16px; /* 133.333% */
    letter-spacing: 0.4px;
    color: ${props => props.$mode === 'Light' ? '#5946D2' : '#9373FF'};
`;