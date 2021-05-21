import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import Context from '../../services/Context';
import './Summary.css';


class Summary extends React.Component {
    static contextType = Context;

    deleteButton = (e) => {
        e.stopPropagation();
        const { deleteItem } = this.context;
        fetch(`https://quiet-bayou-13105.herokuapp.com/api/summary/${this.props.summary_id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('There was an error in deletion')
                }
                return response;
            })
            .then(() => {
                deleteItem(this.props.summary_id);
            })
            .catch(err => {
                alert(err)
            })
    }

    render() {
        return (
            <div className='Summary'>
                <div className='content-summary-container'>
                    <Link to={`/summary/${this.props.summary_id}`}>
                        <p className='content'>{this.props.content}</p>
                    </Link>
                    <button className="summary-button" onClick={this.deleteButton}>
                        Delete
                    </button>
                </div>
            </div>
        )
    }
}

Summary.propTypes = {
    summary_id: PropTypes
        .number
        .isRequired,
    content: PropTypes
        .string
        .isRequired,
    caption: PropTypes
        .string
        .isRequired
}

export default Summary;