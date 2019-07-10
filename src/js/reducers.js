import { GET } from "./action-types";
const initialState = {
    test: []
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET:
            return Object.assign({}, state, { test: action.payload });
        default:
            break;
    }

    return state;
}
export default rootReducer;