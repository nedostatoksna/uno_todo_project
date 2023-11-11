import React, { useContext, useState } from "react";
import style from "./SideBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleUserPanel } from "../../store/actionCreators/userPanelActionCreators";
import UserInterface from "../UserInterface";
import Wrapper from "../../ui/divs/Wrapper";
import { search, toggleIsSearching } from "../../store/actionCreators/todoListActionCreators";
import IconButton from "../../ui/buttons/IconButton";
import searchIcon from "../../images/searchIcon.svg";
import searchIconDarkTheme from "../../images/searchIconDark.svg";
import { AppContext } from "../../context/context";
import SearchInput from "../../ui/SearchInput";

const SearchBar = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState("");
    const context = useContext(AppContext);

    const preSearch = (searchString) => {
        setValue(searchString);
        dispatch(toggleIsSearching());
        dispatch(search(value));
    };

    return (
        <>
            <Wrapper $margin={"20px auto 0px auto"} $background={context.mode === "Light" ? "rgba(28, 27, 31, 0.08)" : "rgba(230, 225, 229, 1)"} $height={"60px"} $width={"240px"}>
                <IconButton src={context.mode === "Light" ? searchIcon : searchIconDarkTheme} alt="magnifying glass icon" $margin={"17px 8px 17px 16px"} />
                <SearchInput $mode={context.mode} placeholder="Search" value={value} onChange={(e) => preSearch(e.target.value)} />
                {/* <input placeholder="Search" className={style.input} value={value} onChange={(e) => preSearch(e.target.value)} /> */}
            </Wrapper>
            <hr className={style.line} />

        </>
    )
};

export default SearchBar;