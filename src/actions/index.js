export const createNote = (id, text) => {
    return {
      type: "CREATE_NOTE",
      payload: {id, text}
    }
}

export const deleteNote = (id) => {
    return {
      type: 'DELETE_NOTE',
      payload: {id}
    }
}
