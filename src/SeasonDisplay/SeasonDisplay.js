import React from 'react'
import SeasonSearch from '../SeasonSearch/SeasonSearch'

export default class SeasonDisplay extends React.Component {
    render() {
        return (
            <main>
                <SeasonSearch />
                <section className="display-season-data">
                    
                </section>
            </main>
        )
    }
}