import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ContestantExpanded from './ContestantExpanded';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter>
    <ContestantExpanded contestant={''}/>
    </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
});