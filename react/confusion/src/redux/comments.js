import * as ActionTypes from "./ActionTypes";

//reducer

/** 
 * when you post a comment, you will first send the comment over to the server, 
 * and if the comment is successfully added on the server site and the server sends back a success of the posting of the comment, 
 * only then you will add it to the redux store. So, that way, 
 * you ensure that the comment posted by the user is actually reflected by changing the data on the server site before even adding it to that redux store.
*/
export const Comments = (state = { errmess: null, comments: [] }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return {
                ...state,
                isLoading: false,
                errMess: null,
                comments: action.payload,
            };
        case ActionTypes.COMMENTS_FAILED:
            return {
                ...state,
                isLoading: false,
                errMess: action.payload,
                comments: [],
            };
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            return { ...state, comments: state.comments.concat(comment) };

        default:
            return state;
    }
};