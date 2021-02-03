import React from 'react'
import Contestant from '../Contestant/Contestant';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Context from '../Context'; 

export default class DataDisplay extends React.Component {
    static contextType = Context;

    render() {
        const keywordFilteredContestant = this.props.keywordFilteredContestant

        const veryFilteredContestant = keywordFilteredContestant.filter(contestant => {
            if (this.props.selectedSeason === 'All') {
                return contestant
            }
            return contestant.assigned_season === Number(this.props.selectedSeason)
        })

        const filtersMap = veryFilteredContestant.map(contestant => {
            return (
                <Contestant
                    key={contestant.contestant_id}
                    contestant_id={contestant.contestant_id}
                    contestant_name={contestant.contestant_name}
                    contestant_image={contestant.contestant_image}
                />
            )
        });
        
        return (
            <div>
                <div className='contestantDisplay'>
                    <ErrorBoundary>
                        <div className="display-contestant-data">
                            <div className="grid-rows">
                                {filtersMap}
                            </div>
                        </div>
                    </ErrorBoundary> 
                </div>
            </div>
        )
    }
}