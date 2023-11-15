import React from "react";
import styled from "styled-components";

const Modal = ( props ) => {

    return (
        <>
            <StyledModal {...props}>{props.children}</StyledModal>
        </>
    )
};
export default Modal;

const StyledModal = styled.div` 
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.4);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: ${props => props.$zIndex || 0 };
`;