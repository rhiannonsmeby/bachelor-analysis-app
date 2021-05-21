import React from 'react';
import ReactDOM from 'react-dom';
import SeasonSearch from './SeasonSearch';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SeasonSearch />, div);
    ReactDOM.unmountComponentAtNode(div);
});