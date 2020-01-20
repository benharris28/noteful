
export const noteCompare = (notes=[], noteId) => notes.find(note => noteId === note.id)
  
export const folderDisplay = (folders=[], folderId) => folders.find(folder => folder.id === folderId)
console.log(folderDisplay)

export const getNotesByFolder = (notes=[], folderId) => (
    (!folderId)
    ? notes
    : notes.filter(note => note.folderId === folderId)
)