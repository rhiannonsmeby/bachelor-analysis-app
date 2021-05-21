import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import SingleSummary from './SingleSummary';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter>
    <SingleSummary caption={''} content={''} summary_id={1}/>
    </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
});