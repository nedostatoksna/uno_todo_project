import React from "react";
import styled from "styled-components";

const ModalContent = ( props ) => {

    return (
        <>
            <StyledModalContent {...props}>{props.children}</StyledModalContent>
        </>
    )
};
export default ModalContent;

const StyledModalContent = styled.div` 
    background: ${props => props.$mode === "Light" ? "#fff" : "#201F24"};
    border-radius: 28px;
    width: ${props => props.$width || "500px" };
    padding: 24px;
    display: flex;
    flex-direction: column;
`;