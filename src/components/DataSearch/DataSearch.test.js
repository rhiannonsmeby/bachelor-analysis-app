import React from 'react';
import ReactDOM from 'react-dom';
import DataSearch from './DataSearch';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DataSearch />, div);
    ReactDOM.unmountComponentAtNode(div);
});