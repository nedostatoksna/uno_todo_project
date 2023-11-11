import React from "react";
import styled from "styled-components";

const ModalHeader = ( props ) => {

    return (
        <>
            <StyledModalHeader {...props}>{props.children}</StyledModalHeader>
        </>
    )
};
export default ModalHeader;

const StyledModalHeader = styled.h1` 
    font-family: "Roboto";
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px; /* 127.273% */
    color: ${props => props.$mode === "Light" ? "#1C1B1F" : "#E6E1E5"};
    margin-bottom: 16px;
`;