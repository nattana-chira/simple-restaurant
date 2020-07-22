import React, { Fragment } from 'react'
import Arr from '../../../utils/array'

export default function RestaurantStar(props) {
    const { note } = props
    
    return (
        <Fragment>
            {Arr.fromNumber(note).map((star, key) => (
                <i key={key} className="fa fa-star" />
            ))}
        </Fragment>
    )
}
