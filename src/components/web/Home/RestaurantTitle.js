import React, { Fragment } from 'react'
import Arr from '../../../utils/array'

export default function RestaurantTitle(props) {
    const { restaurant } = props

    return (
        <Fragment>
            {Arr.fromNumber(restaurant.price.substr(1)).map((star, key) => (
                <i key={key} className="fa fa-dollar" />
            ))}
            -
            {restaurant.category.name}
            -
            {restaurant.district.substr(1)}
        </Fragment>
    )
}
