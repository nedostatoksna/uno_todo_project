import React from "react";
import styled from "styled-components";

const ButtonsWrapper = ( props ) => {

    return (
        <>
            <StyledButtonsWrapper {...props}>{props.children}</StyledButtonsWrapper>
        </>
    )
};
export default ButtonsWrapper;

const StyledButtonsWrapper = styled.div` 
    padding: ${props => props.$padding || "20px 0px 0px 0px"};
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`;