import React, { useState } from 'react'
import PropTypes from 'prop-types'
import RestaurantAPI from '../../../services/apis/restaurant'
import { Redirect } from 'react-router-dom'
import RestaurantTitle from './RestaurantTitle'
import RestaurantStar from './RestaurantStar'
import styled from 'styled-components'

export default function RestaurantList(props) {
    const [redirect, setRedirect] = useState(null)
    const { restaurants } = props

    function redirectToDetail(id) {
        setRedirect(`/restaurant/${id}`)
    }

    if (redirect) {
        return <Redirect to={redirect} />
    }

    return (
        <div className="row">
            {restaurants.map((restaurant) => (
                <div className="col-6 p-3" key={restaurant.id}>
                    <div className="card mb-4 mr-4 shadow-sm">
                        <div className="card-body" onClick={() => redirectToDetail(restaurant.id)}>
                            <PreviewImage src={RestaurantAPI.URL + restaurant.cover[0].url} />
                            <div className="restaurant-name text-left mb-2">
                                <strong>{restaurant.name}</strong>
                            </div>
                            <div className="d-flex restaurant-desc">
                                <div className="restaurant-content text-left" style={styles.halfWidth}>
                                    <RestaurantTitle restaurant={restaurant} />
                                </div>
                                <div className="restaurant-star text-left" style={styles.halfWidth}>
                                    <RestaurantStar note={restaurant.note} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

const PreviewImage = styled.img`
    object-fit: cover;
    width: 100%;
    height: 180px;
`

const styles = {
    halfWidth: { width: '50%' }
}

RestaurantList.propTypes = {
    restaurants: PropTypes.arrayOf(PropTypes.object)
}
