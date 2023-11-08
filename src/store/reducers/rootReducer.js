import { combineReducers } from "redux";
import dataListReducer from "./dataListReducer";
import todoListReducer from "./todoListReducer";
import todoPanelReducer from "./todoPanelReducer";
import userPanelReducer from "./userPanelReducer";

const reducer = combineReducers({
    dataLists: dataListReducer,
    todoListUI: todoListReducer,
    todoPanelUI: todoPanelReducer,
    userPanelUI: userPanelReducer
 }); 

export default reducer;