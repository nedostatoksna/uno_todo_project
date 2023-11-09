import React from "react";
import styled from "styled-components";

const SubText = ( props ) => {

    return (
        <>
            <StyledSubText {...props}>{props.children}</StyledSubText>
        </>
    )
};
export default SubText;

const StyledSubText = styled.p` 
    color: ${props => props.$mode === "Light" ? "rgba(28, 27, 31, 0.38)" : "rgba(230, 225, 229, 0.38)" };
    font-family: "Roboto";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.25px;
    margin-bottom: 20px;
`;