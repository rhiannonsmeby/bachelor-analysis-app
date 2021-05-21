import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Context from '../../services/Context'

class SingleContestant extends React.Component {
    static contextType = Context;

    render() {
        return (
            <div className='Contestant'>
                <Link to={`/contestant/${this.props.contestant_id}`}>
                    <h2>{this.props.contestant_name}</h2>
                </Link>
                <div className='contestant-details'>
                    <ul>
                        <li>Age: {this.props.age}</li>
                        <li>Hometown: {this.props.hometown}</li>
                        <li>Occupation: {this.props.job}</li>
                        <li>Week eliminated: {this.props.eliminated}</li>
                        <li>Season: {this.props.assigned_season}</li>
                    </ul>
                </div>
            </div>
        )
    }
}

SingleContestant.propTypes = {
    age: PropTypes.number,
    contestant_name: PropTypes.string,
    hometown: PropTypes.string,
    job: PropTypes.string,
    eliminated: PropTypes.string,
    season_id: PropTypes.string
}

export default SingleContestant