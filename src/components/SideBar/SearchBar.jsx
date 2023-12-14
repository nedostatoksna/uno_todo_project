import React, { useCallback, useContext, useEffect, useRef } from "react";
import { useDispatch, useSelector} from "react-redux";
import { setSearchQuery } from "../../store/actionCreators/todoListActionCreators";
import { AppContext } from "../../context/context";
import Divider from "../../ui/Divider";
import styled, { css } from "styled-components";
import IconButton from "../../ui/IconButton";
import FlexColumnWrapper from "../../ui/FlexColumnWrapper";
import FlexRowWrapper from "../../ui/FlexRowWrapper";
import { cancelSearchAndCloseSearchPanel, openSearchPanel } from "../../store/actionCreators/thunks";

const SearchBar = () => {

    const searchInputFocus = useRef(null);
    const dispatch = useDispatch();
    const context = useContext(AppContext);
    const isSearching = useSelector(state => state.todoListUI.isSearching);
    const searchQuery = useSelector(state => state.todoListUI.searchQuery);

    const cashedPreSearch = useCallback(() => {
        dispatch(openSearchPanel());
    }, [dispatch]);

    useEffect(() => {
        const input = searchInputFocus.current;
        input.addEventListener("focus", cashedPreSearch);
        return () => input.removeEventListener("focus", cashedPreSearch);
    }, [cashedPreSearch]);

    return (
        <>
            <SearchBarWrapper $mode={context.mode}>
                <FlexRowWrapper $center>
                    <IconButton 
                        $type={"search"}
                        alt="magnifying glass icon" 
                        $marginLeftLarge
                        $marginRightSmall
                        $marginTopBottom
                        $small
                        $mode={context.mode}
                    ></IconButton>
                        <FlexColumnWrapper $flexStart>
                            { isSearching ? <StyledLabel htmlFor="searchInput" $mode={context.mode}>Search</StyledLabel> : undefined}
                                <StyledSearchInput 
                                    ref={searchInputFocus} 
                                    $mode={context.mode} 
                                    $isSearching={isSearching} 
                                    placeholder="Search" 
                                    value={searchQuery}
                                    id="searchInput"
                                    onChange={(e) => {dispatch(setSearchQuery({ searchString: e.target.value }))}}
                                />
                        </FlexColumnWrapper>
                </FlexRowWrapper>
                    { 
                        isSearching 
                            ?  <IconButton
                                    $type={"cross"}
                                    $marginTopBottom
                                    $marginRightLarge
                                    $marginLeftSmall
                                    alt="cross"
                                    $small
                                    onClick={() => {dispatch(cancelSearchAndCloseSearchPanel())}}
                                    $mode={context.mode}
                                ></IconButton> : undefined
                    }
            </SearchBarWrapper>
            <Divider $mode={context.mode} />
        </> 
    )
};

export default SearchBar;

const SearchBarWrapper = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    ${props => props.$mode === "Light" && css`
        background-color: var(--transparent-grey-text);
    `} 
    ${props => props.$mode === "Dark" && css`
        background-color: var(--dark-mode-transparent-grey-text);
    `} 
`;
const StyledSearchInput = styled.input` 
    background: transparent;
    width: ${props => props.$isSearching === true ? "144px" : "176px"};
    height: 24px;
    border: none;
    ${props => props.$mode === "Light" && css`
        ${props => props.$isSearching === false && css`
            color: var(--transparent-grey-text-medium-variant);
        `} 
        ${props => props.$isSearching === true && css`
            color: var(--black);
        `} 
    `} 
    ${props => props.$mode === "Dark" && css`
        ${props => props.$isSearching === false && css`
            color: var(--dark-mode-transparent-grey-text-medium-variant);
        `} 
        ${props => props.$isSearching === true && css`
            color: var(--dark-mode-white-text);
        `}
    `} 
`;
const StyledLabel = styled.label` 
    ${props => props.$mode === "Light" && css`
        color: var(--primary-purple);
    `} 
    ${props => props.$mode === "Dark" && css`
        color: var(--dark-mode-primary-purple);
    `} 
`;