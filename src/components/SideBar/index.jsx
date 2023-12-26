import React, { useContext } from "react";
import SearchBar from "./SearchBar";
import ImportantFilter from "./ImportantFilter";
import ListOfLists from "../ListOfLists";
import NewListBtn from "./NewListBtn";
import { AppContext } from "../../context/context";
import Divider from "../../ui/Divider";
import FlexColumnWrapper from "../../ui/FlexColumnWrapper";
import UserCard from "./UserCard";

const SideBar = () => {
    
    const context = useContext(AppContext);

    return (
        <FlexColumnWrapper  
            $paddingOnTheSidesLarge 
            $paddingTopLarge 
            $paddingBottom 
            $widthSmall 
            $spaceBetween
        >
            <div>
                <UserCard />
                <SearchBar />
                <ImportantFilter />
                <Divider 
                    $mode={context.mode} 
                    $marginTopBottom 
                    $light 
                />
                <ListOfLists />
            </div>
            <NewListBtn />
        </FlexColumnWrapper>
    )
};

export default SideBar;

