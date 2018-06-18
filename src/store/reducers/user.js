import {FETCH_USER} from "../actions/actionTypes";

const initialState = {
    name: ''
};

const userReducer = (userState = initialState, action) => {
    switch (action.type) {
        case FETCH_USER:
            return {
                name: action.data.name
            };
        default:
            return userState;
    }
};

export default userReducer;