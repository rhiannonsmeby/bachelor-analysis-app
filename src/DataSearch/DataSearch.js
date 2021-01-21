import React from 'react'
import Contestant from '../Contestant/Contestant';

export default function DataSearch() {
    return (
        <section className="data-controls">
                <select id="show-type">
                    <option defaultValue="Choose a Show">Choose a Show</option>
                    <option value="All">All Shows</option>
                    <option value="Bachelor">Bachelor</option>
                    <option value="Bachelorette">Bachelorette</option>
                </select>
                <select id="season">
                    <option defaultValue="Choose a Season">Choose a Season</option>
                    <option value="All">All Seasons</option>
                    <option value="1">Season 1</option>
                    <option value="2">Season 2</option>
                    <option value="3">Season 3</option>
                    <option value="etc">Etc...</option>
                </select>
                <form className="keyword-search">
                    <input type="text" placeholder="Search.." name="search" />
                    <button type="submit">Search</button>
                </form>
        </section>
    )
}