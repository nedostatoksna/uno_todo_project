import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { toggleUserPanel } from "../../store/actionCreators/userPanelActionCreators";
import SearchBar from "./SearchBar";
import ImportantFilter from "./ImportantFilter";
import ListOfLists from "../ListOfLists";
import NewListBtn from "./NewListBtn";
import { AppContext } from "../../context/context";
import styled, { css } from "styled-components";
import Divider from "../../ui/Divider";
import StyledHeader from "../../ui/StyledHeader";
import FlexColumnWrapper from "../../ui/FlexColumnWrapper";
import FlexRowWrapper from "../../ui/FlexRowWrapper";
import Picture from "../../ui/Picture";

const SideBar = () => {
    
    const dispatch = useDispatch();
    const context = useContext(AppContext);

    return (
        <FlexColumnWrapper $paddingOnTheSidesLarge $paddingTopLarge $paddingBottom $width={"20vw"} $spaceBetween>
            <div>
                <FlexRowWrapper $pointer onClick={() => {dispatch(toggleUserPanel())}}>
                    <Picture $mode={context.mode}>{context.userInitials}</Picture>
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