import React from 'react'
import RestaurantTitle from '../Home/RestaurantTitle'
import RestaurantStar from '../Home/RestaurantStar'

export default function Header(props) {
    const { restaurant } = props

    return (
        <div className="h5">
            <div className="mb-2">{restaurant.name}</div>
            <div className="mb-2">
                <RestaurantTitle restaurant={restaurant} />
            </div>
            <div>
                <RestaurantStar note={restaurant.note} />
            </div>
        </div>
    )
}
