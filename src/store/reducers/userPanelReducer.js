import { 
    TOGGLE_MODAL, 
    IS_LOGGING_OUT, 
    SAVE_SETTINGS } from "../actions/userPanelActions";
import userPanelInitialState from "../states/userPanelInitialState";

const userPanelReducer = (state = userPanelInitialState, {type, payload}) => {
    switch (type) {
        case TOGGLE_MODAL: return {
            ...state, isShowingUserPanel: !state.isShowingUserPanel
        }
        case IS_LOGGING_OUT: return {
            ...state, isLogouting: !state.isLogouting
        }
        case SAVE_SETTINGS: return {
            ...state,
            palette: payload.dynamicContext.palette,
            lang: payload.dynamicContext.lang,
            mode: payload.dynamicContext.mode
        }
        default: return state;
    }
};

export default userPanelReducer;

