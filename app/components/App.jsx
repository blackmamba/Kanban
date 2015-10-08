//to enable React dev tools
window.React = React;

import uuid from 'node-uuid';
import React from 'react';
import Notes from './Notes.jsx';
import NoteActions from '../actions/NoteActions';
import NoteStore from '../stores/NoteStore'
import 'array.prototype.findindex';



export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.storeChanged = this.storeChanged.bind(this);
        this.state = NoteStore.getState();
        
    }

    componenetDidMount() {
    	NoteStore.listen(this.storeChanged);
    }

    componentWillUnmount() {
    	NoteStore.unlisten(this.storeChanged);
    }

    editNote(id, task) {
    	NoteActions.update({id, task});
    }    

    storeChanged() {
    	this.setState(state);
    }

    render() {
        const notes = this.state.notes;

        return (
            <div> 
            	<button className='add-note' onClick={this.addNote}>+</button>
				<Notes items={notes} onEdit={this.editNote} onDelete={this.deleteNote}/>
			</div>
        );
    }

    deleteNote(id) {
    	NoteActions.delete(id);
    }

    addNote() {
        NoteActions.create({task:'New task'})
    }

}
