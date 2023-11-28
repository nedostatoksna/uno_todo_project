import { combineReducers } from "redux";
import dataListReducer from "./dataListReducer";
import todoListReducer from "./todoListReducer";
import todoPanelReducer from "./todoPanelReducer";
import userPanelReducer from "./userPanelReducer";
import calendarReducer from "./calendarReduser";

const reducer = combineReducers({
    dataLists: dataListReducer,
    todoListUI: todoListReducer,
    todoPanelUI: todoPanelReducer,
    userPanelUI: userPanelReducer,
    calendarUI: calendarReducer
 }); 

export default reducer;