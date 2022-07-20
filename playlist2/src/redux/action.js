export const ADD_TO_PLAYLIST = 'ADD_TO_PLAYLIST'
export const REMOVE_FROM_PLAYLIST = 'REMOVE_FROM_PLAYLIST'
export const START_PLAYER = 'START_PLAYER'
export const STOP_PLAYER = 'STOP_PLAYER'

export const addToPlaylist1 = (song) => ({
    type:'ADD_TO_PLAYLIST',
    payload:song
})
export const removeFromPlaylist1 = (song) => ({
    type:'REMOVE_FROM_PLAYLIST',
    payload:song
})
export const playSong = (song) => ({
    type:'START_PLAYER',
    payload:song
})
export const removeSong = (song) => ({
    type:'STOP_PLAYER',
    payload:song
})