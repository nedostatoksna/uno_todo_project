import React, { useCallback, useContext, useEffect, useRef } from "react";
import { useDispatch, useSelector} from "react-redux";
import { setSearchQuery } from "../../store/actionCreators/todoListActionCreators";
import { AppContext } from "../../context/context";
import styled, { css } from "styled-components";
import FlexColumnWrapper from "../../ui/FlexColumnWrapper";
import { openSearchPanel } from "../../store/actionCreators/thunks";

const SearchBarInput = () => {

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
          <FlexColumnWrapper $flexStart $paddingTopBottomSmall>
            { isSearching && <StyledLabel 
                                htmlFor="searchInput" 
                                $mode={context.mode}
                            >
                                Search
                            </StyledLabel> }
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
    )
};

export default SearchBarInput;

const StyledSearchInput = styled.input` 
    background: transparent;
    width: calc(20vw * 3/5 - 40px);
    height: 24px;
    border: none;
    padding-right: 16px;
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