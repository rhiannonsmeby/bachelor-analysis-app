import React from 'react';
import ReactDOM from 'react-dom';
import DataDisplay from './DataDisplay';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
    <DataDisplay keywordFilteredContestant={[]}/>, div);
    ReactDOM.unmountComponentAtNode(div);
});