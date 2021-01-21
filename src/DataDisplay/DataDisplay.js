import React from 'react'
import DataSearch from '../DataSearch/DataSearch';
import Contestant from '../Contestant/Contestant';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Context from '../Context'; 

export default class DataDisplay extends React.Component {
    static contextType = Context;

    render() {
        const {contestant} = this.context;
        const contestantMap = contestant.map(contestant => {
            return (
                <Contestant
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
        });
        console.log(contestantMap)
        
        return (
            <main>
            <DataSearch />
            <section className="displayData">
                <div className='contestantDisplay'>
                    <ErrorBoundary>
                        {contestantMap}
                    </ErrorBoundary> 
                </div>
            </section>
        </main>
        )
    }
}