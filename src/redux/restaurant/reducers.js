import { actionTypes } from './actions'

const initialState = {
    isFetched: false,
    restaurants: [],
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.RESTAURANTS_FETCHED:
            return setRestaurants(state, action)

        default :
            return state    
    }
}

function setRestaurants(state, action) {
    return {
        ...state,
        isFetched: true,
        restaurants: [...action.restaurants]
    }
}

export default reducer;
