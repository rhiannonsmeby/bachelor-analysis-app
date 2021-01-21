import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import BachelorContext from './Context'
import LandingPage from  './LandingPage/LandingPage'
import SeasonDisplay from './SeasonDisplay/SeasonDisplay'
import './App.css'
import DataDisplay from './DataDisplay/DataDisplay';


class App extends React.Component {
  state = {
    contestant: [],
    season: []
  }

  getSeasonData() {
    fetch(`http://localhost:8000/api/season`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Something went wrong')
        }
        return response.json();
      })
      .then(data => {
        this.setState({
          season: data
        })
      })
      .catch(err => {
        alert(err)
      })
  }
  
  getContestantData() {
    fetch(`http://localhost:8000/api/contestant`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Something went wrong')
        }
        return response.json();
      })
      .then(data => {
        this.setState({
          contestant: data
        })
      })
      .catch(err => {
        alert(err);
      })
  }


  componentDidMount() {
    this.getContestantData()
    this.getSeasonData()
  }

  render() {
    const contextValue = {
      season: this.state.season,
      contestant: this.state.contestant
    }
    console.log(contextValue)

  return (
  <div className='App'>
    <header>
      <nav>
        <ul className="nav">
          <li><Link to={`/`}>Home</Link></li>
          <li><Link to={`/season`}>Season Overview</Link></li>
          <li><Link to={`/contestant`}>Data Search</Link></li>
        </ul>
      </nav>
    </header>
    <main>
    <BachelorContext.Provider
      value={contextValue}>
        <Route exact path='/'
          component={LandingPage}
        />
        <Route exact path='/season'
          component={SeasonDisplay}
        />
        <Route exact path='/contestant'
          component={DataDisplay}
        />
    </BachelorContext.Provider>  
    </main>
    <footer>Footer</footer>
  </div>
    )
  }
}



export default App;
