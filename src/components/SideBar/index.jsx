import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { toggleUserPanel } from "../../store/actionCreators/userPanelActionCreators";
import SearchBar from "./SearchBar";
import ImportantFilter from "./ImportantFilter";
import ListOfLists from "../ListOfLists";
import NewListBtn from "./NewListBtn";
import { AppContext } from "../../context/context";
import styled from "styled-components";
import Divider from "../../ui/Divider";
import StyledHeader from "../../styled/StyledHeader";
import FlexWrapper from "../../styled/FlexWrapper";

const SideBar = () => {
    
    const dispatch = useDispatch();
    const context = useContext(AppContext);

    return (
        <SideBarWrapper $mode={context.mode}>
            <div>
                <UserCard $mode={context.mode} onClick={() => {dispatch(toggleUserPanel())}}>
                    <UserPicture $mode={context.mode}>{context.userInitials}</UserPicture>
                    <FlexWrapper $flexStart>
                        <StyledHeader $lineHeight={"20px"} $zeroMargin $bold $mode={context.mode}>{context.userName}</StyledHeader>
                        <UserEmail $mode={context.mode}>{context.userEmail}</UserEmail>
                    </FlexWrapper>
                </UserCard>
                <SearchBar />
                <ImportantFilter />
                <Divider $mode={context.mode} $margin={"9px 0px 10px 0px"} $light />
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
    background: ${props => props.$mode === "Light" ? "var(--primary-purple)" : "var(--dark-mode-primary-purple)"};
    color: ${props => props.$mode === "Light" ? "var(--white)" : "var(--dark-mode-background)"};
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    line-height: 20px; 
    letter-spacing: 0.25px;
    margin-right: 10px;
`;
const UserEmail = styled.h2`
    font-size: 12px;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: 0.4px;
    color: ${props => props.$mode === "Light" ? "var(--transparent-grey-text-dark-variant)" : "var(--dark-mode-transparent-grey-text-dark-variant)"};
`;