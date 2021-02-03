import React from 'react'
import SeasonSearch from '../SeasonSearch/SeasonSearch'
import SeasonDisplay from '../SeasonDisplay/SeasonDisplay'
import Context from '../Context'; 
import NavBar from '../NavBar/NavBar';


export default class SeasonPage extends React.Component {
    static contextType = Context;
    
    constructor(props) {
        super(props);
        this.state = {show: '', selectedSeason: ''}
    }

    //event handlers for SeasonSearch and SeasonDisplay components
    handleShow = event => {
        this.setState({show: event.target.value})
    }
    handleSeason = event => {
        this.setState({selectedSeason: event.target.value})
    }  

    render() {
        return (
            <div>
                <NavBar />
                <SeasonSearch show={this.state.show} selectedSeason={this.state.selectedSeason} handleSeason={this.handleSeason} handleShow={this.handleShow} />
                <SeasonDisplay selectedSeason={this.state.selectedSeason}/>
            </div>
        )
    }
}