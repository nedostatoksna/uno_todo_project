import styled, { css } from "styled-components";
import starIcon from "../resources/images/starIcon.svg";
import starIconDark from "../resources/images/starIconDark.svg";
import houseIcon from "../resources/images/houseIcon.svg";
import houseIconDark from "../resources/images/houseIconDark.svg";
import arrowIcon from "../resources/images/arrowIcon.svg";
import arrowIconDark from "../resources/images/arrowIconDark.svg";
import listIcon from "../resources/images/listIcon.svg";
import listIconDark from "../resources/images/listIconDark.svg";
import calendarDayIcon from "../resources/images/calendarDay.svg";
import calendarDayIconForDark from "../resources/images/calendarDayForDark.svg";
import arrowIconBlack from "../resources/images/arrowIconBlack.svg";
import arrowIconBlackForDark from "../resources/images/arrowIconBlackForDark.svg";

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

