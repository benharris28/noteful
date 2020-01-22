import React from 'react';

const NotefulContext = React.createContext({
    NOTES: {},
    deleteNote: () => {},
    addFolder: () => {}
})

export default NotefulContext;