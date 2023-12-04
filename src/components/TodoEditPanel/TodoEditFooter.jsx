import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { AppContext } from "../../context/context";
import styled from "styled-components";
import IconButton from "../../ui/IconButton";
import { fullMonths, threeLettersWeekDays } from "../../context/calendar";
import { toggleTodoEditPanel, toggleTodoEditPanelAndDeleteTodo } from "../../store/actionCreators/todoPanelActionCreators";

const TodoEditFooter = ({ todo }) => {

    const context = useContext(AppContext);
    const dispatch = useDispatch();

    const prepareDateStringForDisplay = (date) => {
        let dateForDisplay;
        const dayOfTheWeek = threeLettersWeekDays[date.getDay()];
        const month = fullMonths[date.getMonth()].title.slice(0, 3);
        const day = date.getDate();
        dateForDisplay = dayOfTheWeek + ", " + month + " " + day;

        return dateForDisplay;
    }

    return (
        <TodoEditFooterWrapper $mode={context.mode}>
                    <IconButton
                        onClick={() => {dispatch(toggleTodoEditPanel(false))}}
                        $type={"arrowLeft"}
                        alt="arrow left" 
                        $large
                        $mode={context.mode}
                    ></IconButton>
                    <StyledText $mode={context.mode}>
                        Created {prepareDateStringForDisplay(todo.createDate)}
                    </StyledText>
                    <IconButton
                        onClick={() => {dispatch(toggleTodoEditPanelAndDeleteTodo(todo.parentListId, todo.id))}}
                        $type={"deleteGrey"}
                        alt="garbage bin outline" 
                        $large
                        $mode={context.mode}
                    ></IconButton>

        </TodoEditFooterWrapper>
    )
};

export default TodoEditFooter;
 
const TodoEditFooterWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;
const StyledText = styled.p`
    font-size: 12px;
    font-weight: 600;
    line-height: 16px; 
    letter-spacing: 0.4px;
    color: ${props => props.$mode === "Light" ? "var(--transparent-grey-text-dark-variant)" : "var(--dark-mode-transparent-grey-text-dark-variant)"};
`;