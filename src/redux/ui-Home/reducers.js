import { actionTypes } from './actions'

const initialState = {
    categoryFilters: {
        ALL: false,
        French: false,
        Contemporary: false,
        Italian: false,
        Mexican: false,
        Burgers: false,
        Fusion: false,
    },
    neighborhoodFilters: {
        '1st': false,
        '2nd': false,
        '3rd': false,
        '4th': false,
        '5th': false
    }
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.SELECT_CATEGORY_FILTER:
            return toggleCategoryFilter(state, action)

        case actionTypes.SELECT_NEIGHBORHOOD_FILTER:
            return toggleNeighborhoodFilter(state, action)

        default :
            return state    
    }
}

function toggleCategoryFilter(state, action) {
    return {
        ...state,
        categoryFilters: {
            ...state.categoryFilters,
            [action.category]: !state.categoryFilters[action.category]
        }
    }
}

function toggleNeighborhoodFilter(state, action) {
    return {
        ...state,
        neighborhoodFilters: {
            ...state.neighborhoodFilters,
            [action.neighborhood]: !state.neighborhoodFilters[action.neighborhood]
        }
    }
}

export default reducer;
