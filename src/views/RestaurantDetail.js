import React, { useEffect } from 'react'
import Header from '../components/web/RestaurantDetail/Header'
import Gallery from '../components/web/RestaurantDetail/Gallery'
import Information from '../components/web/RestaurantDetail/Information'
import { useParams } from 'react-router'
import { connect } from 'react-redux'
import { fetchRestaurantsIfNeeded } from '../redux/restaurant/actions'
import { getRestaurants } from '../redux/restaurant/selectors'
import { Link } from 'react-router-dom'

function RestaurantDetail(props) {
    const { restaurants, fetchRestaurantsIfNeeded } = props
    const { id } = useParams()
    const restaurant = restaurants.find(res => res.id === parseInt(id))

    useEffect(() => {
        fetchRestaurantsIfNeeded()
    }, [])

    if (! restaurant){
        return null
    }

    return (
        <div className="col-12">
            <div className="mb-4">
                <Link className="p-2 text-dark" to="/"> {'<- Back'} </Link>
            </div>
            <div className="mb-3">
                <Header restaurant={restaurant} />
            </div>
            <div className="mb-5">
                <Gallery restaurant={restaurant} />
            </div>
            <div>
                <Information restaurant={restaurant} />
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        restaurants: getRestaurants(state)
    }
}

const mapDispatchToProps = {
    fetchRestaurantsIfNeeded
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantDetail)
