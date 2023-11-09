import React from "react";
import styled from "styled-components";

const SubHeader = ( props ) => {

    return (
        <>
            <StyledSubHeader {...props}>{props.children}</StyledSubHeader>
        </>
    )
};
export default SubHeader;

const StyledSubHeader = styled.h2` 
    margin-bottom: 100px;
    color: ${props => props.$mode === "Light" ? "#5835E5" : "#CBBEFF"};
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
`;