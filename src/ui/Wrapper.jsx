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
    width: ${props => props.$width || undefined};
    padding: ${props => props.$padding};
    background-color: ${props => props.$background};
`;