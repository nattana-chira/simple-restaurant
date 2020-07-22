import React, { useEffect, Fragment, useRef, useState } from 'react'
import RestaurantList from '../components/web/Home/RestaurantList'
import SidebarFilters from '../components/web/Home/SidebarFilters'
import { connect } from 'react-redux'
import { fetchRestaurantsIfNeeded } from '../redux/restaurant/actions'
import { getFilteredRestaurants, getCategoryFilters, getNeighborhoodFilters } from '../redux/ui-Home/selectors'
import { useParams, useHistory } from 'react-router'
import { byPagination } from '../utils/pagination'
import Pagination from '../components/elements/Pagination'

function Home(props) {
    const { categoryFilters, neighborhoodFilters, filteredRestaurants, fetchRestaurantsIfNeeded } = props
    const { page } = useParams()
    const history = useHistory()
    const firstRender = useRef(true)
    const currentPage = parseInt(page || 1)
    const perPage = 4
    const restaurants = byPagination(filteredRestaurants, perPage, currentPage)

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
            return;
        }
        history.push('/page/1');
    }, [categoryFilters, neighborhoodFilters])

    useEffect(() => {
        fetchRestaurantsIfNeeded()
    }, [])

    return (
        <Fragment>
            <div className="col-3">
                <SidebarFilters />
            </div>
            <div className="col-9">
                <RestaurantList restaurants={restaurants} />
                <Pagination currentPage={currentPage} perPage={perPage} dataSource={filteredRestaurants} />
            </div>
        </Fragment>
    )
}

function mapStateToProps(state) {
    return {
        categoryFilters: getCategoryFilters(state),
        neighborhoodFilters: getNeighborhoodFilters(state),
        filteredRestaurants: getFilteredRestaurants(state)
    }
}

const mapDispatchToProps = {
    fetchRestaurantsIfNeeded
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
