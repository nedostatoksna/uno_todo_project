import React, { useCallback, useContext, useEffect, useRef } from "react";
import { useDispatch, useSelector} from "react-redux";
import { cancelSearch, preToggleSearch, setSearchQuery, toggleIsSearching } from "../../store/actionCreators/todoListActionCreators";
import { AppContext } from "../../context/context";
import Divider from "../../ui/Divider";
import styled from "styled-components";
import IconButton from "../../ui/IconButton";

const SearchBar = () => {

    const searchInputFocus = useRef(null);
    const dispatch = useDispatch();
    const context = useContext(AppContext);
    const isSearching = useSelector(state => state.todoListUI.isSearching);
    const searchQuery = useSelector(state => state.todoListUI.searchQuery);

    const cashedPreSearch = useCallback(() => {
        dispatch(preToggleSearch());
    }, [dispatch]);

    useEffect(() => {
        const input = searchInputFocus.current;
        input.addEventListener("focus", cashedPreSearch);
        return () => input.removeEventListener("focus", cashedPreSearch);
    }, [cashedPreSearch]);

    return (
        <>
            <SearchBarWrapper $mode={context.mode}>
                <StyledWrapper>
                    <IconButton 
                        $type={"search"}
                        alt="magnifying glass icon" 
                        $margin={"17px 8px 17px 16px"} 
                        $small
                        $mode={context.mode}
                    ></IconButton>
                        <StyledSearchInputWrapper>
                            { isSearching ? <StyledLabel htmlFor="searchInput" $mode={context.mode}>Search</StyledLabel> : undefined}
                                <StyledSearchInput 
                                    ref={searchInputFocus} 
                                    $mode={context.mode} 
                                    $isSearching={isSearching} 
                                    placeholder="Search" 
                                    value={searchQuery}
                                    id="searchInput"
                                    onChange={(e) => {dispatch(setSearchQuery(e.target.value))}}
                                />
                        </StyledSearchInputWrapper>
                </StyledWrapper>
                    { 
                        isSearching 
                            ?  <IconButton
                                    $type={"cross"}
                                    $margin={"17px 16px 17px 8px"}
                                    alt="cross"
                                    $small
                                    onClick={() => {dispatch(cancelSearch())}}
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
const StyledWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;
const StyledSearchInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;
const StyledSearchInput = styled.input` 
    color: ${props => props.$mode === "Light" && props.$isSearching === false ?  "rgba(28, 27, 31, 0.38)"
    : props => props.$mode === "Light" && props.$isSearching === true ? "#1C1B1F"
    : props => props.$mode === "Dark" && props.$isSearching === true ? "#E6E1E5"
    : "rgba(230, 225, 229, 0.38)"};
    background: transparent;
    font-family: "Roboto";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0.5px;
    width: ${props => props.$isSearching === true ? "144px" : "176px"};
    height: 24px;
    border: none;
`;
const StyledLabel = styled.label` 
    font-family: "Roboto";
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 16px; 
    letter-spacing: 0.4px;
    color: ${props => props.$mode === 'Light' ? '#5946D2' : '#9373FF'};
`;