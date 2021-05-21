import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Summary from './Summary';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter>
    <Summary caption={''} content={''} summary_id={1}/>
    </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
});