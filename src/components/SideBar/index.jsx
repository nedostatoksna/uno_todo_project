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
import FlexColumnWrapper from "../../styled/FlexColumnWrapper";
import FlexRowWrapper from "../../styled/FlexRowWrapper";

const SideBar = () => {
    
    const dispatch = useDispatch();
    const context = useContext(AppContext);

    return (
        <FlexColumnWrapper $padding={"40px 20px 20px 20px"} $width={"20vw"} $spaceBetween>
            <div>
                <FlexRowWrapper  onClick={() => {dispatch(toggleUserPanel())}}>
                    <UserPicture $mode={context.mode}>{context.userInitials}</UserPicture>
                    <FlexColumnWrapper $flexStart>
                        <StyledHeader $lineHeight={"20px"} $zeroMargin $bold $mode={context.mode}>{context.userName}</StyledHeader>
                        <UserEmail $mode={context.mode}>{context.userEmail}</UserEmail>
                    </FlexColumnWrapper>
                </FlexRowWrapper>
                <SearchBar />
                <ImportantFilter />
                <Divider $mode={context.mode} $margin={"9px 0px 10px 0px"} $light />
                <ListOfLists />
            </div>
            <NewListBtn />
        </FlexColumnWrapper>
    )
};

export default SideBar;

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