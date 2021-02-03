import React from 'react';
import {Link} from 'react-router-dom';

export default function NavBar() {
    return (
        <header>
        <a href="/"><img src="https://img.icons8.com/ios-glyphs/50/000000/rose.png" alt="rose icon"/></a>
        <ul className="nav">
          <li><Link to={`/`}>Home</Link></li>
          <li><Link to={`/season`}>Season</Link></li>
          <li><Link to={`/contestant`}>Search</Link></li>
          <li><Link to={`/summarypage`}>Summary</Link></li>
        </ul>
    </header>
    )
}