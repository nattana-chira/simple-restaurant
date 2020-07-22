import React, { Fragment } from 'react'
import RestaurantStar from '../Home/RestaurantStar'

export default function Information(props) {
    const { restaurant } = props

    return (
        <Fragment>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                    <a className="nav-link active" data-toggle="tab" href="#information-tab" role="tab" aria-controls="information-tab" aria-selected="true">
                        Information
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#review-tab" role="tab" aria-controls="review-tab" aria-selected="false">
                        Review
                    </a>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active p-3" id="information-tab" role="tabpanel" aria-labelledby="information-tab">
                    <div className="row">
                        <div className="col-4">
                            <h6>Opening Hours</h6>
                            <div>
                                {restaurant.opening_hours.map((time, key) => (
                                    <Fragment key={key}>
                                        <div>{time.day_interval}</div>
                                        <div>{time.opening_hour} - {time.closing_hour}</div>
                                    </Fragment>
                                ))}
                            </div>
                        </div>
                        <div className="col-4">
                            <h6>Details</h6>
                            <p>{restaurant.description}</p>
                        </div>
                        <div className="col-4">
                            <h6>Location</h6>
                            <p>{restaurant.address}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="offset-4 col-4">
                            <h6>Neighborhood</h6>
                            <p>{restaurant.district}</p>
                        </div>
                        <div className="col-4">
                            <h6>Website</h6>
                            <p>{restaurant.website}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="offset-8 col-4">
                            <h6>Phone</h6>
                            <p>{restaurant.phone}</p>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade p-3" id="review-tab" role="tabpanel" aria-labelledby="review-tab">
                    {restaurant.reviews.map((review, key) => (
                        <div key={key} className="card card-body">
                           
                            <div><RestaurantStar note={review.note} /></div>
                            <p>{review.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Fragment>
    )
}
