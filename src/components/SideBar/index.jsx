import React, { useContext } from "react";
import style from "./SideBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleUserPanel } from "../../store/actionCreators/userPanelActionCreators";
import UserInterface from "../UserInterface";
import SearchBar from "./SearchBar";
import ImportantFilter from "./ImportantFilter";
import ListOfLists from "../ListOfLists";
import NewListBtn from "./NewListBtn";
import Wrapper from "../../ui/divs/Wrapper";
import { AppContext } from "../../context/context";
import Flex from "../../ui/divs/Flex";


const SideBar = () => {
    const dispatch = useDispatch();
    const context = useContext(AppContext);

    const userPanelState = useSelector(state => state.userPanelUI.isShowingUserPanel);

    return (
        <Wrapper $sideBar $mode={context.mode} $primary>
            <Flex $flexDir={"row"} $mode={context.mode} onClick={() => {dispatch(toggleUserPanel())}}>
            
                <div className={style.user_picture}>AB</div>
                <div className={style.text_box}>
                    <h1 className={style.user_name}>Antonio Bonilla</h1>
                    <h2 className={style.user_email}>antonio.bonilla@horus.com.uy</h2>
                </div>
            </Flex>
            { userPanelState && <UserInterface toggleUserPanel={toggleUserPanel} /> }
            <SearchBar />
            <ImportantFilter />
            <hr className={style.divider} width="240px" />
            <ListOfLists />
            <NewListBtn />
        </Wrapper>
    )
};

export default SideBar;