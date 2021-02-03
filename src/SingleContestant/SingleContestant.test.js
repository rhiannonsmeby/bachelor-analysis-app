import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import SingleContestant from './SingleContestant';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter>
    <SingleContestant />
    </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
});