# Actions:
Actions are the javascript objects that have a :

* type property
* payload property (optional)

The type property defines what action should the reducer execute.

The payload property provides the data to reducer to operate upon.

```js

const action = {
  type: "CREATE_NEW_NOTE",
  payload: "The text of the note to create will go here"
}

```

# Reducers
Reducers are the functions that operate on actions to produce new state.

```js
const reducer = (state = [], action) => {
  if(action.type === "CREATE_NEW_NOTE")
      return {...state, action.payload};

  return state
}

```

# Action Creators
Action creators are the functions that returns actions as a result.

```js
const note_creator = (text) => {
  return {
    type: "CREATE_NEW_NOTE",
    payload: text
  }
}
```
