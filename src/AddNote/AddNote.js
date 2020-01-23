import React from 'react';
import NotefulContext from '../NotefulContext';
import ValidationError from '../ValidationError/ValidationError';

class AddNote extends React.Component {
    // Form for name, content, folder
    // validate name is not left blank
    // Select folder to add the note to (map through folders)
    // API post call on submit of form
    // Add to context
    // Add button in main
    static contextType = NotefulContext;
    
    constructor(props) {
        super(props);
        this.addNoteName = React.createRef();
        this.addNoteContent = React.createRef();
        this.addNoteFolder = React.createRef();
        this.state = {
            name: {
                value: '',
                touched: false
            },
            content: {
                value: ''
            },
            folder: {
                value: ''
            }
        }
    }

    updateName(name) {
        this.setState({ name: {value: name}})
    }

    updateContent(content) {
        this.setState({ content: {value: content }})
    }

    updateFolder(folder) {
        this.setState({ folder: { value: folder} })
    }

    validateName() {
        const name = this.state.name.value.trim();
        if (name.length === 0) {
            return 'Name is required';
        } 
    }

    onSubmit = e => {
        e.preventDefault();
        const { name, content, folder } = this.state;
        const addNote = {
            name: name.value,
            content: content.value,
            folderId: folder.value,
            modified: new Date()
        }

        fetch('http://localhost:9090/notes', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addNote),
        })
        .then(res => {
            if(!res.ok)
                return res.json().then(e => Promise.rejected(e))
            return res.json()
        })
        .then(note => {
            this.context.addNote(note)
            this.props.history.push(`/folder/${note.folderId}`)
        })
        .catch(error => {
            console.error({ error })
        })
    }
    
    render() {
        const { folders=[] } = this.context
        const nameError = this.validateName();

        return (
            <div className="AddNote">
                <h2> Add Note </h2>
                <form 
                    className="addNote-form"
                    onSubmit={this.handleSubmit}
                >
                    <label htmlFor="addNote-name">
                        Name
                    </label>
                    <input
                        type="text"
                        id="addNote-name"
                        name="addNote-name"
                        ref={this.addNoteName}
                        onChange={e => this.updateName(e.target.value)} />
                        {this.state.name.touched && <ValidationError message={nameError} />}
                    
                    <label htmlFor="addNote-content">
                        Content
                    </label>
                    <input
                        type="text"
                        id="addNote-content"
                        name="addNote-content"
                        ref={this.addNoteContent} 
                        onChange={e => this.updateContent(e.target.value)} />
                    <label htmlFor='note-folder-select'>
                        Folder
                    </label>
                    <select 
                        id='addNote-folder' 
                        name='addNote-folder' 
                        ref={this.addNoteFolder}
                        onChange={e => this.updateFolder(e.target.value)}>
                        <option value={null}>...</option>
                        {folders.map(folder =>
                            <option key={folder.id} value={folder.id}>
                            {folder.name}
                        </option>
                         )}
                    </select>
                    <div className="addNote-button-container">
                        <button 
                            type="submit">
                                Submit
                            </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddNote;

