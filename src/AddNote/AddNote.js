import React from 'react';
import NotefulContext from '../NotefulContext';
import ValidationError from '../ValidationError/ValidationError';
import './AddNote.css';

class AddNote extends React.Component {
    // Form for name, content, folder
    // validate name is not left blank
    // Select folder to add the note to (map through folders)
    // API post call on submit of form
    // Add to context
    // Add button in main
    static defaultProps = {
        history: {
            push: () => { }
        }
    }
    
    static contextType = NotefulContext;
    
    constructor(props) {
        super(props);

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
        console.log(this.state.name.value)
    }

    updateName(name) {
        this.setState({ name: {value: name}})
        console.log(this.state.name.value)
    }

    updateContent(content) {
        this.setState({ content: {value: content }})
        console.log(this.state.content.value)
    }

    updateFolder(folder) {
        this.setState({ folder: { value: folder} })
        console.log(this.state.folder.value)
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
        console.log(name);
        const addNote = {
            name: name.value,
            content: content.value,
            folderId: folder.value,
            modified: new Date()
        }
        console.log(addNote)

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
                        name="name"
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
                        <option value={null}>Please select a folder</option>
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

