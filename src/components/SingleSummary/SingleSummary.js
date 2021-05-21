import React from 'react';
import PropTypes from 'prop-types';
import Context from '../../services/Context';

class SingleSummary extends React.Component {
    static contextType = Context;
    static defaultProps = {
        onDeleteSummary: () => { }
    }

    deleteButton = (e) => {
        e.stopPropagation();
        const { deleteItem } = this.context;
        fetch(`http://t:8000/api/summary/${this.props.summary_id}`, {
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
                this.props.onDeleteSummary()
            })
            .catch(err => {
                alert(err)
            })
    }

    render() {

        return (
            <div className='Summary'>
                <h2>{this.props.content}</h2>
                <p>{this.props.caption}</p>
                <button onClick={this.deleteButton}>
                        Delete
                </button>
            </div>
        )
    }
}

SingleSummary.propTypes = {
    modified: PropTypes.string,
    name: PropTypes.string,
    onDeleteSummary: PropTypes.func
}

export default SingleSummary