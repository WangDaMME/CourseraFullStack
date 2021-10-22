import * as ActionTypes from "./ActionTypes";


//dishes (initial 3 states)
export const Dishes = (state = {isLoading : true, errMess: null, dishes: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_DISHES:
            return  {...state, isLoading : false, errMess:null, dishes:action.payload} // return a new object

        case ActionTypes.DISHES_LOADING:
            return  {...state, isLoading : true, errMess: null, dishes:[]} // return a new object
        case ActionTypes.DISHES_FAILED:
            return  {...state, isLoading : false, errMess: action.payload, dishes:[]} // return a new object

        default:
          return state;
      }
};