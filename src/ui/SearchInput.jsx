import React from "react";
import styled from "styled-components";

const SearchInput = ( props ) => {

    return (
        <>
            <StyledSearchInput {...props} />
        </>
    )
};
export default SearchInput;

const StyledSearchInput = styled.input` 
    color: ${props => props.$mode === "Light" ? "rgba(28, 27, 31, 0.38)" : "rgba(230, 225, 229, 0.38)"};
    ${'' /* background: ${props => props.$mode === "Light" ? "rgba(28, 27, 31, 0.08)" : "rgba(230, 225, 229, 1)"}; */}
    background: transparent;
    font-family: "Roboto";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px; /* 150% */
    letter-spacing: 0.5px;
    margin: 17px 16px 17px 0px;
    width: 176px;
    height: 24px;
    border: none;
`;