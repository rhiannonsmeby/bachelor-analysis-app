import React from 'react'
import PropTypes from 'prop-types'
import Context from '../../services/Context'
import SingleContestant from '../SingleContestant/SingleContestant'
import './ContestantExpanded.css'

class ContestantExpanded extends React.Component {
    static contextType = Context;
    
    render() {
      const {contestant} = this.context;
      const targetContestant = contestant.find(contestant => {
        return contestant.contestant_id === Number(this.props.match.params.contestant_id)
      }) || {contestant_id: ''}
        return (
          <div className='contestant-display' >
                <SingleContestant
                    key={targetContestant.contestant_id}
                    contestant_id={targetContestant.contestant_id}
                    contestant_name={targetContestant.contestant_name}
                    age={targetContestant.age}
                    hometown={targetContestant.hometown}
                    job={targetContestant.job}
                    eliminated={targetContestant.eliminated}
                    assigned_season={targetContestant.assigned_season}
                    contestant_image={targetContestant.contestant_image}
                />
                <button className='back-button' onClick={() => this.props.history.goBack()}>
                        Go back
                </button>
            </div>
        )
    }
    
}

ContestantExpanded.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object
}

export default ContestantExpanded;