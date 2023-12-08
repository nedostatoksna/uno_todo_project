import React from "react";
import styled from "styled-components";

const TransparentBackground = ( props ) => {

    return (
        <StyledBackground {...props}>{props.children}</StyledBackground>
    )
};
export default TransparentBackground;

const StyledBackground = styled.div` 
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    background-color: var(--transparent-modal-background);
`;