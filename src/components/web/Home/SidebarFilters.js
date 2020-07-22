import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { getCategoryFilters, getNeighborhoodFilters } from '../../../redux/ui-Home/selectors'
import { selectCategoryFilter, selectNeighborhoodFilter } from '../../../redux/ui-Home/actions'

function SidebarFilters(props) {
    const { categoryFilters, neighborhoodFilters, selectCategoryFilter, selectNeighborhoodFilter } = props

    return (
        <Fragment>
            <div className="mt-2">
                <strong>Categories (Optional)</strong>
                <Filter dataSource={categoryFilters} onSelect={selectCategoryFilter} /> 
                <hr />
                <strong>Neighborhood (Optional)</strong>
                <Filter dataSource={neighborhoodFilters} onSelect={selectNeighborhoodFilter} />
            </div>
        </Fragment>
    )
}

function Filter(props) {
    const { dataSource, onSelect } = props
    
    return (
        <ul className="list-group list-group-flush card">
            {Object.keys(dataSource).map(key => (
                <li key={key} className="list-group-item text-left">
                    <input id={key} type="checkbox" className="mr-2" checked={dataSource[key]} onChange={() => onSelect(key)} />
                    <label htmlFor={key}>{key}</label>
                </li>
            ))}
        </ul>
    )
}

function mapStateToProps(state) {
    return {
        categoryFilters: getCategoryFilters(state),
        neighborhoodFilters: getNeighborhoodFilters(state)
    }
}

const mapDispatchToProps = {
    selectCategoryFilter,
    selectNeighborhoodFilter
}

export default connect(mapStateToProps, mapDispatchToProps) (SidebarFilters)