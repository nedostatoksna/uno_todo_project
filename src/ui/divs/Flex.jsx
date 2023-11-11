import React from "react";
import styled from "styled-components";

const Flex = ( props ) => {

    return (
        <>
            <StyledFlex {...props}>{props.children}</StyledFlex>
        </>
    )
};
export default Flex;

const StyledFlex = styled.div` 
    display: ${props => props.$display || "flex"};
    flex-direction: ${props => props.$flexDir || "column"};
    align-items: ${props => props.$alignItems || "center"};
`;