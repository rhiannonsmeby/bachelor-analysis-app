import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
    return (
        <header>
          <div className='navLogos'>
            <a href="/" className='title'>
              <img src="https://img.icons8.com/ios-glyphs/50/000000/rose.png" alt="rose icon"/>
            
            </a>
            {/* <p>mobile nav icon here</p> */}
          </div>
        <nav>
          <ul className="nav">
            <li><Link to={`/`}>Home</Link></li>
            <li><Link to={`/season`}>Season</Link></li>
            <li><Link to={`/contestant`}>Search</Link></li>
            <li><Link to={`/summarypage`}>Summary</Link></li>
          </ul>
        </nav>
    </header>
    )
}