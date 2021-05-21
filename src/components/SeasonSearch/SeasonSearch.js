import React from 'react'
import Context from '../../services/Context'

export default class SeasonSearch extends React.Component {
    static contextType = Context;


    render() {
        const {season} = this.context;

        const filteredOptions = season.filter(season => {
            return (season.show).toLowerCase() === (this.props.show).toLowerCase()
        })

        const selectOptions = filteredOptions.map((season) => {
            return (
                <option key={season.season_id} value={season.season_id}>{season.season_name}</option>
            )
        })

        return (
            <section className="data-controls">
                <h2>Season Overview</h2>
                <p>Select a show and season to see a list of matching contestants</p>
                <select id="show-type" onChange={this.props.handleShow}>
                    <option defaultValue='null'>Choose a Show</option>
                    <option value="Bachelor">Bachelor</option>
                    <option value="Bachelorette">Bachelorette</option>
                </select>
                <select id="season" onChange={this.props.handleSeason}>
                    <option defaultValue='null'>Choose a Season</option>
                    {selectOptions}
                </select>
            </section>
        )
    }
}