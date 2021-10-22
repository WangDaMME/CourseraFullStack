import * as ActionTypes from "./ActionTypes";
import { DISHES } from '../shared/dishes';

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

// thunk

//return as a func for thunk
export const fetchDishes = () => (dispatch) =>{
   
    // 1. 先 setState 成为true 2. 然后添加 dishes

   
    dispatch(dishesLoading(true));

    setTimeout( ()=>{
        dispatch(addDishes(DISHES))
    }, 2000)
}

//action
export const dishesLoading = ()=>({
    type: ActionTypes.DISHES_LOADING
})

export const dishesFailed = (errmess)=>({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
})

export const addDishes = (dishes) =>({

    type: ActionTypes.ADD_DISHES,
    payload: dishes

})