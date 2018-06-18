import {FETCH_USER} from "./actionTypes";

export const fetchUser = (data) => {
    return {
        type: FETCH_USER,
        data
    }
};