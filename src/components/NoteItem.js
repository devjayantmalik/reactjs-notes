import React from 'react';


const NoteItem = (props) => {
  return (
    <div className="ui floating message">
        <p style={{fontSize: '1.4em'}} className="large">{props.note.text}</p>
        <button className="ui red button" onClick={() => props.onDelete(props.note.id)}>Delete</button>
    </div>
  )
}

export default NoteItem;
