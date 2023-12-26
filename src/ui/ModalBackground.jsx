import React from "react";
import styled, { css } from "styled-components";

const ModalBackground = ( props ) => {

    return (
        <StyledBackground {...props}>{props.children}</StyledBackground>
    )
};
export default ModalBackground;

const StyledBackground = styled.div` 
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    background-color: var(--transparent-modal-background);
    ${props => props.$secondLayerModal && css`
        z-index: 2;
    `}
`;