import React from 'react';
import ReactDOM from 'react-dom';
import ExpandedSummary from './ExpandedSummary';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ExpandedSummary summary={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);
});