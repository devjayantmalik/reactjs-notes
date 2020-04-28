import React from 'react';
import {connect} from 'react-redux';

import EditText from './components/EditText';
import NoteItem from './components/NoteItem';

import {createNote, deleteNote} from './actions';

class App extends React.Component{


  noteFormSubmitted = (text) => {
    const id = this.props.count + 1;
    this.props.create(id, text);
  }

  renderNotes = () => {
    const notes = this.props.notes;
    return notes.map(note => {
      return (
        <NoteItem
          key={note.id}
          note={note}
          onDelete={id => this.props.delete(id)}
        />
      );
    })
  }

  render(){
    return (
      <div className="ui basic segment">
        <EditText
          onSubmit={this.noteFormSubmitted}
          placeholder="Enter Note text to take note." />

        <div className="ui container segment">
          <p>Count Of Notes: {this.props.count}</p>
          {this.renderNotes()}
        </div>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
    return {
      count: state.count,
      notes: state.notes,
    };
}

export default connect(mapStateToProps, {
  'create': createNote,
  'delete': deleteNote
})(App);
