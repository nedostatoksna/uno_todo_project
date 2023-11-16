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
    margin-bottom: 5px;
    font-family: "Roboto";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px; 
    letter-spacing: 0.5px;
    text-align: start;
    background-repeat: no-repeat;
    background-color: transparent;
    color: ${props => props.$mode === "Light" ? "#1C1B1F" : "#E6E1E5"};
    margin: ${props => props.$margin};

    ${props => props.$houseIcon && css `
        background-image: ${props.$mode === "Light" ? `url(${houseIcon})` : `url(${houseIconDark})`}, ${props.$mode === "Light" ? `url(${arrowIcon})` : `url(${arrowIconDark})`};
        background-position: center left 8px, center right 8px;
    `}
    ${props => props.$starIcon && css `
        background-image: ${props.$mode === "Light" ? `url(${starIcon})` : `url(${starIconDark})`}, ${props.$mode === "Light" ? `url(${arrowIcon})` : `url(${arrowIconDark})`};
        background-position: center left 8px, center right 8px;
    `}
    ${props => props.$listIcon && css `
        background-image: ${props.$mode === "Light" ? `url(${listIcon})` : `url(${listIconDark})`}, ${props.$mode === "Light" ? `url(${arrowIcon})` : `url(${arrowIconDark})`};
        background-position: center left 8px, center right 8px;
    `}
    ${props => props.$active && css `
        background-color: rgba(89, 70, 210, 0.08);
    `}
`;

