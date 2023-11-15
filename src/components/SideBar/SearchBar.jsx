import React, { useCallback, useContext, useEffect, useRef } from "react";
import { useDispatch, useSelector} from "react-redux";
import { setSearchQuery, toggleIsSearching } from "../../store/actionCreators/todoListActionCreators";
import searchIcon from "../../images/searchIcon.svg";
import searchIconDarkTheme from "../../images/searchIconDark.svg";
import { AppContext } from "../../context/context";
import Divider from "../../ui/Divider";
import Label from "../../ui/Label";
import styled from "styled-components";
import Button from "../../ui/Button";

const SearchBar = () => {

    const searchInputFocus = useRef(null);

    const dispatch = useDispatch();
    const context = useContext(AppContext);
    const isSearching = useSelector(state => state.todoListUI.isSearching);
    const searchQuery = useSelector(state => state.todoListUI.searchQuery);

    const cashedPreSearch = useCallback((e) => {
        dispatch(toggleIsSearching());
    }, [dispatch]);

    const cancelSearch = () => {
        dispatch(toggleIsSearching());
        dispatch(setSearchQuery(""))
    };

    useEffect(() => {
        const input = searchInputFocus.current;
        input.addEventListener("focus", cashedPreSearch);
        return () => input.removeEventListener("focus", cashedPreSearch);
    }, [cashedPreSearch]);

    return (
        <>
            <SearchBarWrapper $mode={context.mode}>
                    <Button 
                        $type={"search"}
                        src={context.mode === "Light" ? searchIcon : searchIconDarkTheme} 
                        alt="magnifying glass icon" 
                        $margin={"17px 8px 17px 16px"} 
                        $mode={context.mode}
                    ></Button>
                        <StyledSearchInputWrapper>
                            { isSearching ? <Label $mode={context.mode}>Search</Label> : undefined}
                                <StyledSearchInput 
                                    ref={searchInputFocus} 
                                    $mode={context.mode} 
                                    $isSearching={isSearching} 
                                    placeholder="Search" 
                                    value={searchQuery}
                                    onChange={(e) => {dispatch(setSearchQuery(e.target.value))}}
                                />
                        </StyledSearchInputWrapper>
                    { 
                        isSearching 
                            ?  <Button
                                    $type={"cross"}
                                    $margin={"17px 16px 17px 8px" }
                                    alt={"cross"} 
                                    onClick={() => cancelSearch()}
                                    $mode={context.mode}
                                ></Button> : undefined
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