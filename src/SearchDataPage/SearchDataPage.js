import React from 'react';
import DataSearch from '../DataSearch/DataSearch';
import DataDisplay from '../DataDisplay/DataDisplay';
import Context from '../Context';
import {Link} from 'react-router-dom';
import NavBar from '../NavBar/NavBar';


export default class SearchDataPage extends React.Component {
    static contextType = Context;

    constructor(props) {
        super(props);
        this.state = {show: '', selectedSeason: '', topic: '', keyword: '', keywordFilteredContestant: []}
    }

    //event handlers for DataSearch and DataDisplay and SaveData components
    handleShow = event => {
        this.setState({show: event.target.value})
    }
    handleSeason = event => {
        this.setState({selectedSeason: event.target.value})
    }
    handleTopic = e => {
        this.setState({topic: e.target.value})
    }
    handleKeyword = e => {
        this.setState({keyword: e.target.value})
    }
    handleSubmit = event => {
        event.preventDefault()
        if (this.state.topic.length === 0) {
            alert('Please choose a topic')
        }
        else if (this.state.keyword.length === 0) {
            alert('Please search for a keyword')
        }
        else {
            fetch(`https://quiet-bayou-13105.herokuapp.com/api/contestant/${this.state.topic}/${this.state.keyword}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('We could not find any matching contestants')
                    }
                    return response.json()
                })
                .then(data => {
                    this.setState({
                        keywordFilteredContestant: data
                    })
                })
                .catch(err => {
                    alert(err);
                })
        }
    }

    


    render() {
        return (
            <div>
                <NavBar />
                <DataSearch show={this.state.show} selectedSeason={this.state.selectedSeason} handleSeason={this.handleSeason} handleShow={this.handleShow} topic={this.state.topic} handleTopic={this.handleTopic} handleKeyword={this.handleKeyword} conditionalDirections={this.props.conditionalDirections} handleSubmit={this.handleSubmit}/>
                <DataDisplay selectedSeason={this.state.selectedSeason} keywordFilteredContestant={this.state.keywordFilteredContestant} handleSubmit={this.handleSubmit}/>
                <Link to={{
                    pathname: "/saveData",
                    state: { show: this.state.show, selectedSeason: this.state.selectedSeason, topic: this.state.topic, keyword: this.state.keyword, keywordFilteredContestant: this.state.keywordFilteredContestant }
                }}>
                    <h3 className='add'>Save This Data</h3>
                </Link>
            </div>
        )
    }
}