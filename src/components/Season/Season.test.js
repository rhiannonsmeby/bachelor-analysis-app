import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Season from './Season';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter>
    <Season season_name={1} season_id={1} show={''}/>
    </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
});