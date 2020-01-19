import React from 'react';

const NotefulContext = React.createContext({
    NOTES: {},
    deleteNote: () => {},
})

export default NotefulContext;