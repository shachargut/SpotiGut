import {ADD_TO_PLAYLIST,REMOVE_FROM_PLAYLIST,START_PLAYER,STOP_PLAYER} from './action'
const initialState ={
    playList:[],
    result:[],
    player:{}
}
export const orederReducer =(state=initialState,action) => {
    switch(action.type){
        case ADD_TO_PLAYLIST:
            return{...state,playList:[...state.playList,action.payload]};
        case REMOVE_FROM_PLAYLIST:
            return {...state,playList:state.playList.filter((v)=>v.id!=action.payload)};
        case START_PLAYER:
            return {...state,player: action.payload};
        case STOP_PLAYER:
            return {...state,player:{}};
        default:
            return state;    
    }
}