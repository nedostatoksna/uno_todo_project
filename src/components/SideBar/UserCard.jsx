import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { toggleUserPanel } from "../../store/actionCreators/userPanelActionCreators";
import { AppContext } from "../../context/context";
import styled, { css } from "styled-components";
import StyledHeader from "../../ui/Header";
import FlexColumnWrapper from "../../ui/FlexColumnWrapper";
import FlexRowWrapper from "../../ui/FlexRowWrapper";
import Picture from "../../ui/Picture";

const UserCard = () => {
    
    const dispatch = useDispatch();
    const context = useContext(AppContext);

    return (
        <FlexRowWrapper 
            $pointer 
            onClick={() => {dispatch(toggleUserPanel())}}>
            <Picture $mode={context.mode}
        >
            {context.userInitials}
            </Picture>
            <FlexColumnWrapper $flexStart>
                <StyledHeader 
                    $smallLineHeight 
                    $zeroMargin 
                    $bold 
                    $mode={context.mode}
                >
                    {context.userName}
                </StyledHeader>
                <UserEmail $mode={context.mode}>
                    {context.userEmail}
                </UserEmail>
            </FlexColumnWrapper>
        </FlexRowWrapper>
    )
};

export default UserCard;

const UserEmail = styled.h2`
    font-size: 12px;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: 0.4px;
    ${props => props.$mode === "Light" && css`
        color: var(--transparent-grey-text-dark-variant);
    `} 
    ${props => props.$mode === "Dark" && css`
        color: var(--dark-mode-transparent-grey-text-dark-variant);
    `} 
`;