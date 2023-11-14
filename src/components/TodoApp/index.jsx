import React from "react";
import SideBar from "../SideBar";
import TaskListInterface from "../TaskListInterface";
import Wrapper from "../../ui/divs/Wrapper";
import Flex from "../../ui/divs/Flex";

const TodoApp = () => {

    return (
        <Wrapper $width={"1512px"}>
            <Flex $flexDir={'row'}>
                <SideBar />
                <TaskListInterface />
            </Flex>
        </Wrapper>
    )
};

export default TodoApp;