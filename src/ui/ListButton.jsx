import styled, { css } from "styled-components";
import starIcon from "../images/starIcon.svg";
import houseIcon from "../images/houseIcon.svg";
import arrowIcon from "../images/arrowIcon.svg";
import listIcon from "../images/listIcon.svg";

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

    ${props => props.$houseIcon && css `
        background-image: url(${houseIcon}), url(${arrowIcon});
        background-position: center left 8px, center right 8px;
    `}
    ${props => props.$starIcon && css `
        background-image: url(${starIcon}), url(${arrowIcon});
        background-position: center left 8px, center right 8px;
    `}
    ${props => props.$listIcon && css `
        background-image: url(${listIcon}), url(${arrowIcon});
        background-position: center left -1px, center right 8px;
        padding: 10px 8px 10px 48px;
    `}
    ${props => props.$active && css `
        background-color: rgba(89, 70, 210, 0.08);
    `}
`;