import React from 'react';
import NotefulContext from '../NotefulContext';

class AddFolder extends React.Component {
    // Create form which accepts inputs and arranges into API call
    // API call to post to folders list
    // Add folder to context, callback function in context to add to state
    // Add button to Sidebar to invoke the form
    static contextType = NotefulContext;

    constructor(props) {
        super(props);
        this.nameInput = React.createRef();
    }


    updateContext(name) {
        // update context here
    }
    
    handleSubmit(event) {
        event.preventDefault();
        //Api call goes here
        const folderName = this.nameInput.current.value;
        console.log(folderName)

        fetch('http://localhost:9090/folders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(folderName),
        })
        .then(res => {
            if(!res.ok)
                return res.json().then(e => Promise.rejected(e))
            return res.json()
        })
        .then(() => {
            this.context.addFolder(folderName)
            this.props.history.push('/')
        })
        .catch(error => {
            console.error({ error })
        })
    } 

    
    
    render() {
        return (
            <div className="AddFolder">
                <h2>Add Folder</h2>
                <form 
                    className="AddFolder_form"
                    onSubmit={this.handleSubmit}>
                    
                    <label htmlFor="name">Folder Name</label>
                    <input
                        type="text"
                        id="name"
                        className="AddFolder_name"
                        name="name"
                        ref={this.nameInput}
                        />
                    <button
                        type="submit">
                            Submit
                    </button>
                </form>
            </div>
        )
    }
}

export default AddFolder;