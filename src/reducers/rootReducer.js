const initState = {
  groups: [
    {
      id: 1,
      name: 'Home',
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
  ],
  newGroupFormVisible: false,
  selectedGroupIndex: null
}

const rootReducer = (state = initState, action) => {
  console.log('action', action);
  switch(action.type) {
    case 'ADD_GROUP':
      let newGroup = { id: state.groups.length + 1, name: action.payload, tasks: [] }
      let updatedGroups = [...state.groups, newGroup]
      return {...state, groups: updatedGroups}
    case 'DELETE_GROUP':
      updatedGroups = state.groups.filter((group, index) => index !== action.payload)
      return {...state, groups: updatedGroups}
    case 'TOGGLE_GROUP_FORM_VISIBILITY':
      let updatedGroupFormVisibility = !state.newGroupFormVisible
      return {...state, newGroupFormVisible: updatedGroupFormVisibility}
    case 'SELECT_GROUP':
      let updatedSelectedGroup = action.payload
      return {...state, selectedGroupIndex: updatedSelectedGroup}
    
    case 'ADD_TASK':
      let newTask = {
        id: state.groups[state.selectedGroupIndex].tasks.length + 1,
        name: action.payload,
        isDone: false
      }
      let updatedGroup = {...state.groups[state.selectedGroupIndex], tasks: [...state.groups[state.selectedGroupIndex].tasks, newTask]} 
      updatedGroups = [...state.groups]
      updatedGroups.splice(state.selectedGroupIndex, 1, updatedGroup)
      return {...state, groups: updatedGroups}
    case 'DELETE_TASK':
      let updatedTasks = state.groups[state.selectedGroupIndex].tasks.filter(task => task.id !== action.payload)
      updatedGroup = {...state.groups[state.selectedGroupIndex], tasks: updatedTasks}
      updatedGroups = [...state.groups]
      updatedGroups.splice(state.selectedGroupIndex, 1, updatedGroup)
      return {...state, groups: updatedGroups}

    default:
      return state;
  }  
}

export default rootReducer;