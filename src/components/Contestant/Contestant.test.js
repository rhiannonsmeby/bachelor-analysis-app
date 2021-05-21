import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Contestant from './Contestant';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter>
    <Contestant contestant_name={''} contestant_id={1}/>
    </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
});