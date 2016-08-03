import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const LocationCard = ({location}) => (
    <div className="col s12 m6">
        <div className="card">
            <div className="card-image">
                <img src={location.images.rectangle} alt={location.name}/>
                <span className="card-title">{location.name}</span>
            </div>
            <div className="card-content">
                <p>{location.shortDescription}</p>
            </div>
            <div className="card-action">
                <Link className="btn" to={"locations/" + location.id}>Read more</Link>
            </div>
        </div>
    </div>
)

LocationCard.propTypes = { 
    location: PropTypes.object.isRequired
}

export default LocationCard
