import React from 'react';
import PropTypes from 'prop-types';
import Context from '../../services/Context';

class Season extends React.Component {
    static contextType = Context;

    render() {
        return (
            <div className='Season'>
                <div className='season-details'>
                    <ul>
                        <li>Season: {this.props.season_name}</li>
                        <li>Year Aired: {this.props.date_aired}</li>
                        <li>Lead: {this.props.lead_name}</li>
                        <li>Lead: {this.props.lead_2}</li>
                        <li>Proposal: {this.props.proposal}</li>
                        <li>Still Together: {this.props.still_together}</li>
                    </ul>
                </div>
            </div>
        )
    }
}

Season.propTypes = {
    show: PropTypes
        .string
        .isRequired,
    season_id: PropTypes
        .number
        .isRequired,
    season_name: PropTypes
        .number
        .isRequired
}

export default Season;