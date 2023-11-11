import React from "react";
import styled from "styled-components";

const Divider = ( props ) => {

    return (
        <>
            <StyledDivider {...props} />
        </>
    )
};
export default Divider;

const StyledDivider = styled.hr` 
    width: 240px;
    border: 1px solid;
    border-color: ${props => props.$mode === "Light" ? "rgba(28, 27, 31, 0.38)" : "rgba(230, 225, 229, 0.38)"};
    height: 2px;
    margin-bottom: 20px;
`;