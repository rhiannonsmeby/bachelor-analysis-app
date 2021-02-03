import React from 'react';

const BachelorContext = React.createContext({
    season: [],
    contestant: [],
    filteredContestant: [],
    summary: [],
    deleteItem: () => { },
    addSummary: () => { }
})

export default BachelorContext;