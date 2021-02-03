import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import SearchDataPage from './SearchDataPage';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
    <BrowserRouter>
        <SearchDataPage keywordFilteredContestant={[]}/>
    </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
});