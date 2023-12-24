import React from "react";
import { useSelector } from "react-redux";
import UserInterface from "../modals/UserInterface";
import AddDueDate from "../modals/AddDueDateModal";
import Calendar from "../modals/Calendar";
import DeleteListModal from "../modals/DeleteListModal";
import DeleteTaskModal from "../modals/DeleteTaskModal";
import SignOutModal from "../modals/SignOutModal";
import CreateListModal from "../modals/CreateListModal";
import RenameModal from "../modals/RenameModal";
import CreateTaskModal from "../modals/CreateTaskModal";

const ModalCases = () => {

    const lists = useSelector(state => state.dataLists);
    const activeListId = useSelector(state => state.todoListUI.activeListId);

    const isRenaming = useSelector(state => state.todoListUI.isRenamingList);
    const isCreatingList = useSelector(state => state.todoListUI.isCreatingList);
    const isCreatingTodo = useSelector(state => state.todoListUI.isCreatingTodo);
    const activeTodoId = useSelector(state => state.todoPanelUI.activeTodoId);

    const isDeletingTodo = useSelector(state => state.todoPanelUI.isDeletingTodo);
    const isDeletingList = useSelector(state => state.todoListUI.isDeletingList);
    const isSigningOut = useSelector(state => state.userPanelUI.isSigningOut);

    const isShowinguserPanel = useSelector(state => state.userPanelUI.isShowingUserPanel);
    const isShowingChooseDeadlineModal = useSelector(state => state.todoPanelUI.isShowingChooseDeadlineModal);
    const isShowingCalendar = useSelector(state => state.todoPanelUI.isShowingCalendar);
    const activeList = lists.filter(list => list.id ===  activeListId);

    return (
        <>
            { 
                isCreatingList 
                    ? <CreateListModal /> 
                    : isRenaming ? <RenameModal 
                                        listId={activeListId} 
                                        activeList={activeList} /> 
                    : isCreatingTodo && <CreateTaskModal listId={activeListId} /> 
            }
            {
                isDeletingList 
                    ? <DeleteListModal /> 
                    : isDeletingTodo ? <DeleteTaskModal /> 
                    : isSigningOut && <SignOutModal /> 
            }
            {
                isShowinguserPanel && <UserInterface /> 
            }
            {
                isShowingChooseDeadlineModal && <AddDueDate 
                                                    todoId={activeTodoId} 
                                                    listId={activeListId} />
            }
            {
                isShowingCalendar && <Calendar /> 
            }
        </>
    )
};

export default ModalCases;
