const initState = {
  groups: [
    {
      id: 1,
      name: 'Home22',
      tasks: [
        { id: 1, name: 'Brush teeth', isDone: false },
        { id: 2, name: 'Drink vodka', isDone: false },
        { id: 3, name: 'Kill the mouse!', isDone: false }
      ]
    },
    {
      id: 2,
      name: 'Work',
      tasks: [
        { id: 1, name: 'Get to work', isDone: false },
        { id: 2, name: 'Make some tasks', isDone: false },
        { id: 3, name: 'Kill medfarm', isDone: false }
      ]
    },
    {
      id: 3,
      name: 'Education',
      tasks: [
        { id: 1, name: 'Learn hindy', isDone: false },
        { id: 2, name: 'Learn trololo', isDone: false },
      ]
    }
  ]
}

const rootReducer = (state = initState, action) => {
  console.log('action', action);
  switch(action.type) {
    case 'ADD_GROUP':
      let newGroup = { id: state.groups.length + 1, name: action.payload, tasks: [] }
      let updatedGroups = [...state.groups, newGroup]
      return {...state, groups: updatedGroups} 
       
    default:
      return state;
  }  
}

export default rootReducer;