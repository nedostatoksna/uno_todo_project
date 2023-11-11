import React from "react";
import styled from "styled-components";

const IconButton = ( props ) => {

    return (
        <>
            <StyledIconButton {...props} />
        </>
    )
};
export default IconButton;

const StyledIconButton = styled.img` 
    height: 24px;
    width: 24px;
    margin: ${props => props.$margin || undefined};
`;