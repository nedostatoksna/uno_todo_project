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


const SideBar = () => {
    const dispatch = useDispatch();
    const context = useContext(AppContext);

    const userPanelState = useSelector(state => state.userPanelUI.isShowingUserPanel);

    return (

        <Wrapper $padding={"40px 20px 20px 20px"} $width={"280px"} $flexDir={"column"} $display={"flex"} $background={context.mode === "Light" ? "#fff" : "#201F24"}>
            <Wrapper 
                $margin={"auto auto 0px auto"}  
                $width={"240px"} 
                $flexDir={"row"} 
                $display={"flex"} 
                $alignItems={"center"} 
                $mode={context.mode} 
                onClick={() => {dispatch(toggleUserPanel())}}
            >
                <div className={style.user_picture}>AB</div>
                <div className={style.text_box}>
                    <h1 className={style.user_name}>Antonio Bonilla</h1>
                    <h2 className={style.user_email}>antonio.bonilla@horus.com.uy</h2>
                </div>
            </Wrapper>

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