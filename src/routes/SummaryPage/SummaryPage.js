import React from 'react';
import Summary from '../../components/Summary/Summary';
import Context from '../../services/Context';
import PropTypes from 'prop-types';
import NavBar from '../../components/NavBar/NavBar';
import ErrorBoundary from '../../services/ErrorBoundary/ErrorBoundary';


class SummaryPage extends React.Component {
    static contextType = Context;

    render() {
        const { summary } = this.context;
        
        let summaryMap;
        if (summary) {
            summaryMap = summary.map(summary => {
                return <Summary
                    key={summary.summary_id}
                    summary_id={summary.summary_id}
                    content={summary.content}
                    caption={summary.caption}
                />
        });
        } else {
            summaryMap = "Loading..."
        }

        return (
            <div>
                <NavBar />
                <ErrorBoundary>
                <section className="summary-instructions">
                    <h2>Summary</h2>
                    <p>On this page, you can find and manage all of your saved summaries</p>
                </section>
                <div className='DataSummary' >
                    {summaryMap}
                </div>
                </ErrorBoundary>
            </div>
            
        )
    }
}

SummaryPage.propTypes = {
    match: PropTypes.object
}

export default SummaryPage;