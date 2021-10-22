import * as ActionTypes from "./ActionTypes";

//从 comment modal 表里获得的数据
    
export const addComment = (dishId, rating, author, comment) => ({

    type: ActionTypes.ADD_COMMENT, //action type
    // payload // 前一个是名，后一个是收到的变量
    payload: {    
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});