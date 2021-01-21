import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import Context from '../Context'

class ComponentExpanded extends React.Component {
    static contextType = Context;
    
    render() {
        return (
          <div>
            <Link to={`/contestant/${this.props.contestant_id}`}>
                <img src={this.props.contestant_image} alt={this.props.contestant_name}/>
                <h2>{this.props.contestant_name}</h2>
            </Link>
            <Link to={`/contestant/`}>
                <img src={this.props.contestant_image} alt={this.props.contestant_name}/>
                <h2>{this.props.contestant_name}</h2>
            </Link>
          </div>
        )
    }
}

export default ComponentExpanded;