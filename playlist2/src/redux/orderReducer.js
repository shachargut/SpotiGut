import {ADD_TO_PLAYLIST,REMOVE_FROM_PLAYLIST} from './action'
const initialState ={
    playList:[],
    result:[]
}
export const orederReducer =(state=initialState,action) => {
    switch(action.type){
        case ADD_TO_PLAYLIST:
            return{...state,playList:[...state.playList,action.payload]};
        case REMOVE_FROM_PLAYLIST:
            return;
        default:
            return state;    
    }
}