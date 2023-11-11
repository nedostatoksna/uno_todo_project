import React from "react";
import styled from "styled-components";

const Wrapper = ( props ) => {

    return (
        <>
            <StyledWrapper {...props}>{props.children}</StyledWrapper>
        </>
    )
};
export default Wrapper;

const StyledWrapper = styled.div` 
    margin: ${props => props.$margin || "0px"};
    display: ${props => props.$display || undefined};
    flex-direction: ${props => props.$flexDir || undefined};
    align-items: ${props => props.$alignItems || undefined};
    width: ${props => props.$width || undefined};
    height: ${props => props.$height || undefined};
    padding: ${props => props.$padding};
    background-color: ${props => props.$background};
`;