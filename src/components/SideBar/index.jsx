import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleUserPanel } from "../../store/actionCreators/userPanelActionCreators";
import UserInterface from "../UserInterface";
import SearchBar from "./SearchBar";
import ImportantFilter from "./ImportantFilter";
import ListOfLists from "../ListOfLists";
import NewListBtn from "./NewListBtn";
import { AppContext } from "../../context/context";
import styled from "styled-components";
import Divider from "../../ui/Divider";


const SideBar = () => {
    const dispatch = useDispatch();
    const context = useContext(AppContext);

    const userPanelState = useSelector(state => state.userPanelUI.isShowingUserPanel);

    return (
        <SideBarWrapper $mode={context.mode}>
            <div>
                <UserCard $mode={context.mode} onClick={() => {dispatch(toggleUserPanel())}}>
                    <UserPicture $mode={context.mode}>{context.userInitials}</UserPicture>
                    <UserTextBox>
                        <UserName $mode={context.mode}>{context.userName}</UserName>
                        <UserEmail $mode={context.mode}>{context.userEmail}</UserEmail>
                    </UserTextBox>
                </UserCard>
                { userPanelState && <UserInterface toggleUserPanel={toggleUserPanel} /> }
                <SearchBar />
                <ImportantFilter />
                <Divider $margin={"9px 0px 10px 0px"} $height={"1px"} />
                <ListOfLists />
            </div>
            <NewListBtn />
        </SideBarWrapper>
    )
};

export default SideBar;

const SideBarWrapper = styled.div`
    padding: 40px 20px 20px 20px;
    width: 20vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const UserCard = styled.div`
    display: flex;
    flex-direction: row;
`;
const UserPicture = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: ${props => props.$mode === "Light" ? "#5946D2" : "#9373FF"};
    color: ${props => props.$mode === "Light" ? "#fff" : "#201F24"};
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Roboto";
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px; 
    letter-spacing: 0.25px;
    margin-right: 10px;
`;
const UserTextBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;  
`;
const UserName = styled.h1`
    font-family: "Roboto";
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    color: ${props => props.$mode === "Light" ? "#1C1B1F" : "#fff"};
`;
const UserEmail = styled.h2`
    font-family: "Roboto";
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: 0.4px;
    color: ${props => props.$mode === "Light" ? "rgba(28, 27, 31, 0.60)" : "rgba(230, 225, 229, 0.60)"};
`;