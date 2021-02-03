import React from 'react'
import Contestant from '../Contestant/Contestant';
import Season from '../Season/Season';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Context from '../Context'; 


export default class SeasonDisplay extends React.Component {
    static contextType = Context;
    render() {
        const {season, contestant} = this.context;
        const filteredSeason = season.filter(season => {
            return season.season_id === Number(this.props.selectedSeason)
        })
        const seasonMap = filteredSeason.map(season => {
            return (
                <Season
                    key={season.season_id}
                    season_id={season.season_id}
                    show={season.show}
                    season_name={season.season_name}
                    date_aired={season.date_aired}
                    lead_name={season.lead_name}
                    lead_2={season.lead_2}
                    proposal={season.proposal}
                    still_together={season.still_together}
                />
            )
        })
        const filteredContestant = contestant.filter(contestant => {
            return contestant.assigned_season === Number(this.props.selectedSeason)
        })
        const contestantMap = filteredContestant.map(contestant => {
            return (
                <Contestant
                    key={contestant.contestant_id}
                    contestant_id={contestant.contestant_id}
                    contestant_name={contestant.contestant_name}
                    age={contestant.age}
                    hometown={contestant.hometown}
                    job={contestant.job}
                    eliminated={contestant.eliminated}
                    assigned_season={contestant.assigned_season}
                    contestant_image={contestant.contestant_image}
                />
            )
        })
        

        return (
            <div className="display-season-data">
                <ErrorBoundary> 
                    {seasonMap}
                    <div className="display-contestant-data">
                        <div className="grid-rows">
                            {contestantMap}
                        </div>
                    </div>
                </ErrorBoundary>
            </div>
        )
    }
}