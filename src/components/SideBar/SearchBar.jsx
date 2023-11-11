import React, { useContext, useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import Wrapper from "../../ui/divs/Wrapper";
import { search, toggleIsSearching } from "../../store/actionCreators/todoListActionCreators";
import IconButton from "../../ui/buttons/IconButton";
import searchIcon from "../../images/searchIcon.svg";
import whiteCrossIcon from "../../images/whiteCrossIcon.svg";
import blackCrossIcon from "../../images/blackCrossIcon.svg";
import searchIconDarkTheme from "../../images/searchIconDark.svg";
import { AppContext } from "../../context/context";
import SearchInput from "../../ui/SearchInput";
import Divider from "../../ui/Divider";
import Label from "../../ui/Label";

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
            <Wrapper 
                $margin={"20px auto 0px auto"} 
                $background={context.mode === "Light" ? "rgba(28, 27, 31, 0.08)" : "rgba(230, 225, 229, 0.08)"} 
                $height={"60px"} 
                $width={"240px"} 
                $display={"flex"}
                $alignItems={"center"}
            >
                <IconButton 
                    src={context.mode === "Light" ? searchIcon : searchIconDarkTheme} 
                    alt="magnifying glass icon" 
                    $margin={"17px 8px 17px 16px"} 
                    onClick={() => {dispatch(toggleIsSearching())}}
                />
                    <Wrapper $display={"flex"} $flexDir={"column"} $height={"40px"}>
                        { isSearching ? <Label $mode={context.mode}>Search</Label> : undefined}
                        <SearchInput $mode={context.mode} $isSearching={isSearching} placeholder="Search" value={value} onChange={(e) => preSearch(e.target.value)} />
                    </Wrapper>
                { 
                    isSearching 
                        ?  <IconButton 
                                src={context.mode === "Light" ? blackCrossIcon : whiteCrossIcon}
                                alt={"cross"}
                                $margin={"17px 16px 17px 8px"} 
                                onClick={() => {dispatch(toggleIsSearching())}}
                            /> : undefined
                }
            </Wrapper>
            <Divider $mode={context.mode} />
        </>
    )
};

export default SearchBar;