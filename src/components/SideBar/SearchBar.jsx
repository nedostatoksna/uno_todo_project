import React, { useContext } from "react";
import { useDispatch, useSelector} from "react-redux";
import { AppContext } from "../../context/context";
import Divider from "../../ui/Divider";
import styled, { css } from "styled-components";
import IconButton from "../../ui/IconButton";
import FlexRowWrapper from "../../ui/FlexRowWrapper";
import { cancelSearchAndCloseSearchPanel } from "../../store/actionCreators/thunks";
import SearchBarInput from "./SearchBarInput";

const SearchBar = () => {

    const dispatch = useDispatch();
    const context = useContext(AppContext);
    const isSearching = useSelector(state => state.todoListUI.isSearching);

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
                    <SearchBarInput />
                </FlexRowWrapper>
                    { 
                        isSearching 
                            &&  <IconButton
                                    $type={"cross"}
                                    $marginTopBottom
                                    $marginRightLarge
                                    $marginLeftSmall
                                    alt="cross"
                                    $small
                                    onClick={() => {dispatch(cancelSearchAndCloseSearchPanel())}}
                                    $mode={context.mode}
                                ></IconButton> 
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
