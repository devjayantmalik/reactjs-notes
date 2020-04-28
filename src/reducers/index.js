import {combineReducers} from 'redux';

const Note = (notes = [], action) => {
  if(action.type === 'CREATE_NOTE')
    return [...notes, action.payload]

  if(action.type === 'DELETE_NOTE'){
    return notes.filter(note => note.id !== action.payload.id)
  }

  return notes;
}

const countNotes = (notes = 0, action) => {
  if(action.type === 'CREATE_NOTE')
    return notes + 1;

  if(action.type === 'DELETE_NOTE')
    return notes - 1;

  return notes;

}

export default combineReducers({
  "notes": Note,
  'count': countNotes
})
