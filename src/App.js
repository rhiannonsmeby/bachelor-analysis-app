import React from 'react';
import {Route, Switch} from 'react-router-dom';
import BachelorContext from './Context'
import LandingPage from  './LandingPage/LandingPage'
import SeasonPage from './SeasonPage/SeasonPage'
import './App.css'
import ContestantExpanded from './ContestantExpanded/ContestantExpanded'
import SearchDataPage from './SearchDataPage/SearchDataPage';
import SummaryPage from './SummaryPage/SummaryPage';
import SaveDataSummary from './SaveDataSummary/SaveDataSummary';
import ExpandedSummary from './ExpandedSummary/ExpandedSummary';


class App extends React.Component {
  state = {
    contestant: [],
    season: [],
    summary: [],
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

  getSummaryData() {
    fetch(`http://localhost:8000/api/summary`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Something went wrong')
      }
      return response.json();
    })
    .then(data => {
      this.setState({
        summary: data
      })
    })
    .catch(err => {
      alert(err);
    })
  }

  deleteItem = (summaryId) => {
    const filterState = this.state.summary.filter(summary => {
      return summary.summary_id !== summaryId;
    })
    this.setState({
      summary: filterState
    })
  } 

  addSummary = (newSummary) => {
    const addSummary = [...this.state.summary, newSummary]
    this.setState({summary: addSummary})
  }

  componentDidMount() {
    this.getContestantData()
    this.getSeasonData()
    this.getSummaryData()
  }

  render() {
    const contextValue = {
      season: this.state.season,
      contestant: this.state.contestant,
      summary: this.state.summary,
      deleteItem: this.deleteItem,
      addSummary: this.addSummary
    }

  return (
  <div className='App'>
    <BachelorContext.Provider
      value={contextValue}>
        <Route exact path='/'
          component={LandingPage}
        />
        <Route exact path='/season'
          component={SeasonPage}
        />
        <Route exact path='/contestant'
          component={SearchDataPage}
        />
        <Route exact path='/summarypage'
          component={SummaryPage}
        />
        <Switch>
          <Route exact path='/contestant/:contestant_id'
            component={ContestantExpanded}
          />
          <Route exact path='/summary/:summaryId'
            component={ExpandedSummary}
          />
          <Route exact path='/saveData'
            component={SaveDataSummary}
          />
        </Switch>
    </BachelorContext.Provider>  
    <footer>
      <p>Created by Rhiannon Smeby</p>
    </footer>
  </div>
    )
  }
}



export default App;
