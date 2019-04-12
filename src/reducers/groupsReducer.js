const initState = {
  allGroups: [
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
        { id: 3, name: 'Make medfarm great!', isDone: false }
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
  selectedGroupIndex: null
}

const groupsReducer = (state = initState, action) => {
  switch(action.type) {
    case 'ADD_GROUP':
      let newGroup = { id: state.allGroups.length + 1, name: action.payload, tasks: [] }
      let updatedGroups = [...state.allGroups, newGroup]
      return {...state, allGroups: updatedGroups}
    case 'DELETE_GROUP':
      updatedGroups = state.allGroups.filter((group, index) => index !== action.payload)
      return {...state, allGroups: updatedGroups}    
    case 'SELECT_GROUP':
      let updatedSelectedGroup = action.payload
      return {...state, selectedGroupIndex: updatedSelectedGroup}
    
    case 'ADD_TASK':
      let newTask = {
        id: state.allGroups[state.selectedGroupIndex].tasks.length + 1,
        name: action.payload,
        isDone: false
      }
      let updatedGroup = {...state.allGroups[state.selectedGroupIndex], tasks: [...state.allGroups[state.selectedGroupIndex].tasks, newTask]} 
      updatedGroups = [...state.allGroups]
      updatedGroups.splice(state.selectedGroupIndex, 1, updatedGroup)
      return {...state, allGroups: updatedGroups}
    case 'DELETE_TASK':
      let updatedTasks = state.allGroups[state.selectedGroupIndex].tasks.filter((task, index) => index !== action.payload)
      updatedGroup = {...state.allGroups[state.selectedGroupIndex], tasks: updatedTasks}
      updatedGroups = [...state.allGroups]
      updatedGroups.splice(state.selectedGroupIndex, 1, updatedGroup)
      return {...state, allGroups: updatedGroups}
    case 'CHANGE_TASK_STATUS':
      updatedTasks = state.allGroups[state.selectedGroupIndex].tasks.map((task, index) => {
        if (index === action.payload) {
          task.isDone = !task.isDone
        }
        return task
      })
      updatedGroup = {...state.allGroups[state.selectedGroupIndex], tasks: updatedTasks}
      updatedGroups = [...state.allGroups]
      updatedGroups.splice(state.selectedGroupIndex, 1, updatedGroup)
      return {...state, allGroups: updatedGroups}    

    default:
      return state
  }
}

export default groupsReducer