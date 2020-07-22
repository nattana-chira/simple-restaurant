import React from 'react'
import PropTypes from 'prop-types'
import Arr from '../../utils/array'
import { Link } from 'react-router-dom'

export default function Pagination(props) {
    const { currentPage, perPage, dataSource } = props 
    const totalPage = Math.ceil(dataSource.length / perPage)
    
    function activeClass(number) {
        if (currentPage === number+1) {
            return "page-item active"
        }
        return "page-item"
    }

    if (dataSource.length === 0) {
        return null
    }

    return (
        <nav aria-label="pagination">
            <ul className="pagination pagination-lg">
                {Arr.fromNumber(totalPage).map((number) => (
                    <li key={number} className={activeClass(number)}>
                        <Link to={`/page/${number+1}`} className="page-link" href="#">{number+1}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

Pagination.defaultProps = {
    currentPage: 1,
    perPage: 10,
    dataSource: []
}

Pagination.propTypes = {
    currentPage: PropTypes.number,
    perPage: PropTypes.number,
    dataSource: PropTypes.array
}

