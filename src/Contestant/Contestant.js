import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Context from '../Context';
import './Contestant.css';

class Contestant extends React.Component {
    static contextType = Context;

    render() {
        return (
            <div className='Contestant'>
                <Link to={`/contestant/`}>
                    <img src={this.props.contestant_image} alt={this.props.contestant_name}/>
                    <h2>{this.props.contestant_name}</h2>
                </Link>
                <Link to={`/season/`}>
                    <img src={this.props.contestant_image} alt={this.props.contestant_name}/>
                    <h2>{this.props.contestant_name}</h2>
                </Link>
            </div>
        )
    }
}

Contestant.propTypes = {
    contestant_id: PropTypes
        .number
        .isRequired,
    contestant_name: PropTypes
        .string
        .isRequired,
    contestant_image: PropTypes
        .string,
}

export default Contestant;