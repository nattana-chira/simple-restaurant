import { getRestaurants } from '../restaurant/selectors'

export function getCategoryFilters(state) {
    return state.uiHome.categoryFilters
}

export function getNeighborhoodFilters(state) {
    return state.uiHome.neighborhoodFilters
}

export function getFilteredRestaurants(state) {
    const categoryFilters = getCategoryFilters(state)
    const neighborhoodFilters = getNeighborhoodFilters(state)
    const filteredCategories = Object.keys(categoryFilters).filter(key => categoryFilters[key] === true)
    const filteredNeighborhoods = Object.keys(neighborhoodFilters).filter(key => neighborhoodFilters[key] === true)
    const restaurants = getRestaurants(state)

    function categoryMatched(restaurant) {
        return filteredCategories.length === 0 || filteredCategories.includes('ALL') || filteredCategories.includes(restaurant.category.name)
    }

    function neighborhoodMatched(restaurant) {
        return filteredNeighborhoods.length === 0 || filteredNeighborhoods.includes(restaurant.district.substring(1))
    }

    return restaurants.filter(categoryMatched).filter(neighborhoodMatched)
}