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
    color: ${props => props.$mode === "Light" ? "var(--transparent-grey-text-medium-variant)" : "var(--dark-mode-transparent-grey-text-medium-variant)"};
    line-height: 20px;
    letter-spacing: 0.25px;
    margin-bottom: 20px;
`;