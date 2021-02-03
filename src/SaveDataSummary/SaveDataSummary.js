import React from 'react';
import Context from '../Context';
import PropTypes from 'prop-types';
import './SaveDataSummary.css';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

class SaveDataSummary extends React.Component {
    static contextType = Context;

    constructor(props) {
        super(props)
        this.state = {
            content: '',
            caption: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        const content = `${(this.props.location.state.keywordFilteredContestant).length} contestants from show "${this.props.location.state.show}" season "${this.props.location.state.selectedSeason}" have the "${this.props.location.state.topic}" matching "${this.props.location.state.keyword}"`
        const {caption} = e.target
        const summary = {
            caption: caption.value,
            content: content
        }
        
        this.setState({error: null})
        fetch('http://localhost:8000/api/summary', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(summary),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('We could not post this summary')
                }
                return response.json();
            })
            .then(data => {
                caption.value = ''
                this.context.addSummary(data)
                this.props.history.push('/summarypage')
            })
            .catch(err => {
                alert(err);
            })
    }

    updateCaption = (newCaption) => {
        this.setState({
            caption: newCaption
        })
    }

    updateContent = (newContent) => {
        this.setState({
            content: newContent
        })
    }

    
    render() {
    
        return (
            <div className='AddSummary'>
                <ErrorBoundary>
                <form className='addSummaryForm' onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend>Add a New Summary!</legend>
                        <label htmlFor='content'>Content: {' '}</label>
                        <br></br>
                        <p className='summary-content'>{(this.props.location.state.keywordFilteredContestant).length} contestants from show '{this.props.location.state.show}' season '{this.props.location.state.selectedSeason}' have the '{this.props.location.state.topic}' matching '{this.props.location.state.keyword}'</p>
                        <br />
                        <label htmlFor='caption'>Caption: {' '}</label>
                        <br></br>
                        <input type='text' name='caption' id='caption'
                            placeholder='caption' required/>

                        <br></br>

                        <button type='submit'>
                            Save
                        </button>
                    </fieldset>
                </form>
                <button onClick={() => this.props.history.goBack()}>
                    Cancel
                </button>
                </ErrorBoundary>
            </div>
        )
    }
}

SaveDataSummary.propTypes = {
    history: PropTypes
        .object,
    goBack: PropTypes
        .func
}

export default SaveDataSummary;