import React, { useContext } from "react";
import { changeIsSigningOut } from "../../../store/actionCreators/userPanelActionCreators";
import { useDispatch } from "react-redux";
import Button from "../../../ui/Button";
import { AppContext } from "../../../context/context";
import styled from "styled-components";

const UserCard = () => {

    const dispatch = useDispatch();
    const context = useContext(AppContext);

    return (
        <StyledContainer>
            <UserPicture $mode={context.mode}>{context.userInitials}</UserPicture>
            <UserTextBox>
                <UserName $mode={context.mode}>{context.userName}</UserName>
                <UserEmail $mode={context.mode}>{context.userEmail}</UserEmail>
            </UserTextBox>
            <Button 
                $coralColor 
                $ClearBackground 
                $paddingSmall 
                $margin={"0px 0px 12px 0px"}
                $mode={context.mode} 
                onClick={() => {dispatch(changeIsSigningOut())}}
            >Sign Out</Button>
        </StyledContainer>
    )
};

export default UserCard;

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;
`;
const UserPicture = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: ${props => props.$mode === "Light" ? "var(--primary-purple)" : "var(--dark-mode-primary-purple)"};
    color: ${props => props.$mode === "Light" ? "var(--white)" : "var(--dark-mode-background)"};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    line-height: 28px;
    margin-bottom: 12px;
`;
const UserTextBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;  
    margin-bottom: 12px;
`;
const UserName = styled.h1`
    font-size: 22px;
    line-height: 28px; 
    color: ${props => props.$mode === "Light" ? "var(--black)" : "var(--white)"};
`;
const UserEmail = styled.h2`
    font-weight: 600;
    line-height: 20px; 
    letter-spacing: 0.25px;
    color: ${props => props.$mode === "Light" ? "var(--transparent-grey-text-dark-variant)" : "var(--dark-mode-transparent-grey-text-dark-variant)"};
`;