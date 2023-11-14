import React, { useContext, useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { search, toggleIsSearching } from "../../store/actionCreators/todoListActionCreators";
import IconButton from "../../ui/buttons/IconButton";
import searchIcon from "../../images/searchIcon.svg";
import whiteCrossIcon from "../../images/whiteCrossIcon.svg";
import blackCrossIcon from "../../images/blackCrossIcon.svg";
import searchIconDarkTheme from "../../images/searchIconDark.svg";
import { AppContext } from "../../context/context";
import Divider from "../../ui/Divider";
import Label from "../../ui/Label";
import Flex from "../../ui/divs/Flex";
import Wrapper from "../../ui/divs/Wrapper";
import styled from "styled-components";

const SearchBar = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState("");
    const context = useContext(AppContext);
    const isSearching = useSelector(state => state.todoListUI.isSearching);
    console.log(isSearching);

    const preSearch = (searchString) => {
        setValue(searchString);
        dispatch(search(value));
    };

    return (
        <>
            <Wrapper $search $mode={context.mode}>
                <Flex $flexDir={"row"}>
                    <IconButton 
                        src={context.mode === "Light" ? searchIcon : searchIconDarkTheme} 
                        alt="magnifying glass icon" 
                        $margin={"17px 8px 17px 16px"} 
                        onClick={() => {dispatch(toggleIsSearching())}}
                    />
                        <Flex $alignItems={"flex-start"}>
                            { isSearching ? <Label $mode={context.mode}>Search</Label> : undefined}
                            <StyledSearchInput $mode={context.mode} $isSearching={isSearching} placeholder="Search" value={value} onChange={(e) => preSearch(e.target.value)} />
                        </Flex>
                    { 
                        isSearching 
                            ?  <IconButton 
                                    src={context.mode === "Light" ? blackCrossIcon : whiteCrossIcon}
                                    alt={"cross"}
                                    $margin={"17px 16px 17px 8px"} 
                                    onClick={() => {dispatch(toggleIsSearching())}}
                                /> : undefined
                    }

                </Flex>
            </Wrapper>
            <Divider $mode={context.mode} />
        </>
    )
};

export default SearchBar;

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
    &:focus {
        outline: none;
    }
`;