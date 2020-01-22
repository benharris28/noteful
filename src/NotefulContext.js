import React from 'react';

const NotefulContext = React.createContext({
    NOTES: {},
    deleteNote: () => {},
    addFolder: () => {},
    addNote: () => {}
})

export default NotefulContext;