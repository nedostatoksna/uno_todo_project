import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import UserSettings from "../UserSettings";
import UserCard from "./UserCard";
import Background from "../../styled/Background";
import ContentBox from "../../styled/ContentBox";
import { AppContext } from "../../context/context";
import Header from "../../styled/Header";
import Divider from "../../ui/Divider";
import styled from "styled-components";
import Button from "../../ui/Button";

const UserInterface = ({ toggleUserPanel }) => {

    const dispatch = useDispatch();
    const context = useContext(AppContext);

    return (
        <>
        <Background $darkTransparent>
            <ContentBox $mode={context.mode} $primary $padding={"20px"}>
                <StyledContainer>
                    <Button 
                        $icon 
                        $type={"cross"} 
                        $mode={context.mode}
                        alt="close icon" 
                        onClick={() => {dispatch(toggleUserPanel())}}></Button>
                    <Header $mode={context.mode} $margin={"0px 0px 0px 24px"}>Settings</Header>
                </StyledContainer>
                <UserCard />
                <Divider $mode={context.mode} $height={"1px"} />
                <UserSettings />
            </ContentBox>
        </Background>     
        </>  
    )
};

export default UserInterface; 

const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 4px 4px 0px 4px;
`;