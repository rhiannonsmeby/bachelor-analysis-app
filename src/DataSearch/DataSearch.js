import React from 'react'
import Context from '../Context';

export default class DataSearch extends React.Component {
    static contextType = Context;

    render(){
        const {season} = this.context;

        const filteredOptions = season.filter(season => {
            if (this.props.show === 'All' && this.props.season === 'All') {
                return season.show === 'All'
            }
            return (season.show).toLowerCase() === (this.props.show).toLowerCase()
        })

        const selectOptions = filteredOptions.map((season) => {
            return (
                <option key={season.season_id} value={season.season_id}>{season.season_name}</option>
            )
        })

        let conditionalDirections = '';
        if (this.props.topic === 'Hometown') {
            conditionalDirections = `e.g., 'Iowa' or 'georgia'`
        }
        if (this.props.topic === 'Name') {
            conditionalDirections = `e.g., 'Jessenia' or 'zac'`
        }
        if (this.props.topic === 'Age') {
            conditionalDirections = `e.g., '23' or '32'`
        }
        if (this.props.topic === 'Job') {
            conditionalDirections = `e.g., 'nurse' or 'social media'`
        }
        if (this.props.topic === 'Eliminated') {
            conditionalDirections = `e.g., 'Week 1', 'winner', or 'runner-up'`
        }


        return (
            <section className="data-search-controls">
                    <h2>Data Search</h2>
                    <p>Choose a show, season, and topic, then type in a keyword. When you click Search you will see a list of contestants matching the fields you selected</p>
                    <select id="show-type" onChange={this.props.handleShow}>
                        <option defaultValue="Choose a Show">Choose a Show</option>
                        <option value="All">All Shows</option>
                        <option value="Bachelor">Bachelor</option>
                        <option value="Bachelorette">Bachelorette</option>
                    </select>
                    <select id="season" onChange={this.props.handleSeason}>
                        <option defaultValue="Choose a Season">Choose a Season</option>
                        <option value="All">All Seasons</option>
                        {selectOptions}
                    </select>
                    <form className="keyword-search">
                        <select id="search-by" onChange={this.props.handleTopic}>
                            <option id="search-by" defaultValue="Search by">Choose a search topic</option>
                            <option value="Name">Name</option>
                            <option value="Age">Age</option>
                            <option value="Job">Occupation</option>
                            <option value="Hometown">Hometown</option>
                            <option value="Eliminated">Week eliminated</option>
                        </select>
                        <input type="text" placeholder="Search by keyword" name="search" onInput={this.props.handleKeyword} />
                        <p className="directions">{conditionalDirections}</p>
                        <br />
                        <button type="submit" onClick={this.props.handleSubmit}>Search</button>
                    </form>
            </section>
        )
    }
}