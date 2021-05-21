import React from 'react';
import Context from '../../services/Context';
import PropTypes from 'prop-types';
import SingleSummary from '../SingleSummary/SingleSummary';
import './ExpandedSummary.css';

class ExpandedSummary extends React.Component {
    static contextType = Context;

    handleDeleteSummary = () => {
        this.props.history.push('/summarypage')
    }
    
    render() {
        const { summary } = this.context;
        const targetSummary = summary.find(summary => {
            return summary.summary_id === Number(this.props.match.params.summaryId)
        }) || { summary_id: '' }

        return (
            <div className='summary-details' >
                <SingleSummary
                    key={targetSummary.summary_id}
                    summary_id={targetSummary.summary_id}
                    content={targetSummary.content}
                    caption={targetSummary.caption}
                    onDeleteSummary={this.handleDeleteSummary}
                />
                <button className='back-button' onClick={() => this.props.history.goBack()}>
                    Go back
                </button>
            </div>
        )
    }
}

ExpandedSummary.propTypes = {
    history: PropTypes.object,
    match: PropTypes.object
}

export default ExpandedSummary