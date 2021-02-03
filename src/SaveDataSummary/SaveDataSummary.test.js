import React from 'react';
import ReactDOM from 'react-dom';
import SaveDataSummary from './SaveDataSummary';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SaveDataSummary content={''}/>, div);
    ReactDOM.unmountComponentAtNode(div);
});