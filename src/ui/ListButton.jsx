import styled, { css } from "styled-components";
import starIcon from "../images/starIcon.svg";
import starIconDark from "../images/starIconDark.svg";
import houseIcon from "../images/houseIcon.svg";
import houseIconDark from "../images/houseIconDark.svg";
import arrowIcon from "../images/arrowIcon.svg";
import arrowIconDark from "../images/arrowIconDark.svg";
import listIcon from "../images/listIcon.svg";
import listIconDark from "../images/listIconDark.svg";
import calendarDayIcon from "../images/calendarDay.svg";
import calendarDayIconForDark from "../images/calendarDayForDark.svg";
import arrowIconBlack from "../images/arrowIconBlack.svg";
import arrowIconBlackForDark from "../images/arrowIconBlackForDark.svg";

const ListButton = ( props ) => { 
    return (
        <StyledListButton {...props}>{props.children}</StyledListButton>
    )
};

export default ListButton;

const StyledListButton = styled.button`

    padding: 10px 8px 10px 48px;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px; 
    letter-spacing: 0.5px;
    text-align: start;
    background-repeat: no-repeat;
    background-color: transparent;
    margin-bottom: 5px;
    background-position: center left 8px, center right 8px;


    ${props => props.$mode === "Light" && css `
        color: var(--black);
        ${props => props.$houseIcon && css `
            background-image: url(${houseIcon}), url(${arrowIcon});
        `}
        ${props => props.$starIcon && css `
            background-image: url(${starIcon}), url(${arrowIcon});
        `}
        ${props => props.$listIcon && css `
            background-image: url(${listIcon}), url(${arrowIcon});
        `}
        ${props => props.$calendarDay && css `
            background-image: url(${calendarDayIcon});
        `}
        ${props => props.$calendarDayArrow && css `
            background-image: url(${calendarDayIcon}), url(${arrowIconBlack});
        `}
    `}

    ${props => props.$mode === "Dark" && css `
        color: var(--dark-mode-white-text);
        ${props => props.$houseIcon && css `
            background-image: url(${houseIconDark}), url(${arrowIconDark});
        `}
        ${props => props.$starIcon && css `
            background-image: url(${starIconDark}), url(${arrowIconDark});
        `}
        ${props => props.$listIcon && css `
            background-image: url(${listIconDark}), url(${arrowIconDark});
        `}
        ${props => props.$calendarDay && css `
            background-image: url(${calendarDayIconForDark});
        `}
        ${props => props.$calendarDayArrow && css `
            background-image: url(${calendarDayIconForDark}), url(${arrowIconBlackForDark});
        `}
    `}

    ${props => props.$active && css `
        background-color: var(--transparent-lavender);
    `}
    ${props => props.$paddingSmall && css `
        padding: 8px 8px 8px 48px;
    `}
    ${props => props.$marginTop && css `
        margin-top: 5px;
        margin-bottom: 0;
    `}
`;

