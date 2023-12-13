import React, { useCallback, useContext, useEffect, useRef } from "react";
import { useDispatch, useSelector} from "react-redux";
import { setSearchQuery } from "../../store/actionCreators/todoListActionCreators";
import { AppContext } from "../../context/context";
import Divider from "../../ui/Divider";
import styled from "styled-components";
import IconButton from "../../ui/IconButton";
import FlexColumnWrapper from "../../styled/FlexColumnWrapper";
import FlexRowWrapper from "../../styled/FlexRowWrapper";
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
                        $margin={"17px 8px 17px 16px"} 
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
                                    $margin={"17px 16px 17px 8px"}
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
    background-color: ${props => props.$mode === "Light" ? "rgba(28, 27, 31, 0.08)" : "rgba(230, 225, 229, 0.08)"};
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;
const StyledSearchInput = styled.input` 
    color: ${props => props.$mode === "Light" && props.$isSearching === false ?  "rgba(28, 27, 31, 0.38)"
    : props => props.$mode === "Light" && props.$isSearching === true ? "#1C1B1F"
    : props => props.$mode === "Dark" && props.$isSearching === true ? "#E6E1E5"
    : "rgba(230, 225, 229, 0.38)"};
    background: transparent;
    width: ${props => props.$isSearching === true ? "144px" : "176px"};
    height: 24px;
    border: none;
`;
const StyledLabel = styled.label` 
    color: ${props => props.$mode === 'Light' ? '#5946D2' : '#9373FF'};
`;