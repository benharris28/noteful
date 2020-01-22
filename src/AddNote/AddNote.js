import React from 'react';
import NotefulContext from '../NotefulContext';

class AddNote extends React.Component {
    // Form for name, content, folder
    // validate name is not left blank
    // Select folder to add the note to (map through folders)
    // API post call on submit of form
    // Add to context
    // Add button in main
    constructor(props) {
        super(props);
        this.addNoteName = React.createRef(),
        this.addNoteContent = React.createRef(),
        this.addNoteFolder = React.createRef(),
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
        this.setState({ name: {value: addNote-name}})
    }

    validateName() {
        const name = this.state.name.value.trim();
        if (name.length === 0) {
            return 'Name is required';
        } 
    }

    onSubmit(event) {

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
                        ref={this.addNoteContent} />
                    
                    <label htmlFor='note-folder-select'>
                        Folder
                    </label>
                    <select id='addNote-folder' name='addNote-folder' ref={this.addNoteFolder}>
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

