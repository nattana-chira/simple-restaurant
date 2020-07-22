import RestaurantAPI from '../../services/apis/restaurant'

export const actionTypes = {
    RESTAURANTS_FETCHED: 'restaurant/restaurants-fetched',
}

export function restaurantsFetched(restaurants) {
    return {
        type: actionTypes.RESTAURANTS_FETCHED,
        restaurants
    }
}

export function fetchRestaurantsIfNeeded() {
    return function (dispatch) {
        return RestaurantAPI.get()
            .then(res => dispatch(restaurantsFetched(res.data)))
            .catch(console.log)
    }
}