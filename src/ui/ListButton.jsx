import styled, { css } from "styled-components";
import starIcon from "../images/starIcon.svg";
import starIconDark from "../images/starIconDark.svg";
import houseIcon from "../images/houseIcon.svg";
import houseIconDark from "../images/houseIconDark.svg";
import arrowIcon from "../images/arrowIcon.svg";
import arrowIconDark from "../images/arrowIconDark.svg";
import listIcon from "../images/listIcon.svg";
import listIconDark from "../images/listIconDark.svg";

const ListButton = ( props ) => { 
    return (
        <>
            <StyledListButton {...props}>{props.children}</StyledListButton>
        </>
    )
};

export default ListButton;

const StyledListButton = styled.button`

    padding: 10px 8px 10px 48px;
    font-family: "Roboto";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px; 
    letter-spacing: 0.5px;
    text-align: start;
    background-repeat: no-repeat;
    background-color: transparent;
    color: ${props => props.$mode === "Light" ? "var(--black)" : "var(--dark-mode-white-text)"};
    margin: ${props => props.$margin || "0px 0px 5px 0px"};
    background-position: center left 8px, center right 8px;


    ${props => props.$mode === "Light" && css `
        ${props => props.$houseIcon && css `
            background-image: url(${houseIcon}), url(${arrowIcon});
        `}
        ${props => props.$starIcon && css `
            background-image: url(${starIcon}), url(${arrowIcon});
        `}
        ${props => props.$listIcon && css `
            background-image: url(${listIcon}), url(${arrowIcon});
        `}
    `}

    ${props => props.$mode === "Dark" && css `
        ${props => props.$houseIcon && css `
            background-image: url(${houseIconDark}), url(${arrowIconDark});
        `}
        ${props => props.$starIcon && css `
            background-image: url(${starIconDark}), url(${arrowIconDark});
        `}
        ${props => props.$listIcon && css `
            background-image: url(${listIconDark}), url(${arrowIconDark});
        `}
    `}

    ${props => props.$active && css `
        background-color: var(--transparent-lavender);
    `}
`;

