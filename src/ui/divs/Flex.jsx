import React from "react";
import styled, { css } from "styled-components";

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

    ${props => props.$buttons && css `
        flex-direction: row;
        justify-content: flex-end;
    `}
    ${props => props.$header && css `
        flex-direction: row;
        justify-content: space-between;
    `}
`;