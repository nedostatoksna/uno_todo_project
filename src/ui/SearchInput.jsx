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
    color: ${props => props.$mode === "Light" && props.$isSearching === false ?  "rgba(28, 27, 31, 0.38)"
    : props => props.$mode === "Light" && props.$isSearching === true ? "#1C1B1F"
    : props => props.$mode === "Dark" && props.$isSearching === true ? "#E6E1E5"
    : "rgba(230, 225, 229, 0.38)"};
    background: transparent;
    font-family: "Roboto";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0.5px;
    width: ${props => props.$isSearching === true ? "144px" : "176px"};
    height: 24px;
    border: none;
    &:focus {
        outline: none;
    }
`;