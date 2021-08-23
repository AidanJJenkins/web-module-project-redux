import {  TOGGLE_FAVORITES, ADD_FAVORITES, REMOVE_FAVORITES } from '../actions/movieActions'

const initialState = {
    favorites: [{}],
    displayFavorites: true
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_FAVORITES:
        console.log(action.payload)    
        return{
                ...state,
                displayFavorites: !state.displayFavorites
            }
        case ADD_FAVORITES:
            const newFav ={
                ...action.payload
            }
            return {
                ...state,
                favorites: [...state.favorites, newFav]
            }
        case REMOVE_FAVORITES:
            return {
                ...state,
                favorites: state.favorites.filter(favorite => (action.payload !== favorite.id))
            }
        default:
            return state;
    }
}

export default reducer;