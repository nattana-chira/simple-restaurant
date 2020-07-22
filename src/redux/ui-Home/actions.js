export const actionTypes = {
    SELECT_CATEGORY_FILTER: 'ui-Home/select_category_filter',
    SELECT_NEIGHBORHOOD_FILTER: 'ui-Home/select_neighborhood_filter'
}

export function selectCategoryFilter(category) {
    return function (dispatch) {
        return dispatch({
            type: actionTypes.SELECT_CATEGORY_FILTER,
            category
        })
    }
}

export function selectNeighborhoodFilter(neighborhood) {
    return function (dispatch) {
        return dispatch({
            type: actionTypes.SELECT_NEIGHBORHOOD_FILTER,
            neighborhood
        })
    }
}