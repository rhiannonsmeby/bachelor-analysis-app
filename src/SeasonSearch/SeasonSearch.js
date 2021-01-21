import React from 'react'

export default function SeasonSearch() {
    return (
        <section className="data-controls">
            <select id="show-type">
                <option defaultValue="Choose a Show">Choose a Show</option>
                <option value="Bachelor">Bachelor</option>
                <option value="Bachelorette">Bachelorette</option>
            </select>
            <select id="season">
                <option defaultValue="Choose a Season">Choose a Season</option>
                <option value="1">Season 1</option>
                <option value="2">Season 2</option>
                <option value="3">Season 3</option>
                <option value="etc">Etc...</option>
            </select>
        </section>
    )
}