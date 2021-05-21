import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
    <SeasonDisplay />, div);
    ReactDOM.unmountComponentAtNode(div);
});