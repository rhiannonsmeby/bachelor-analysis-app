import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import SeasonPage from './SeasonPage';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter> 
    <SeasonPage /> 
    </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
});