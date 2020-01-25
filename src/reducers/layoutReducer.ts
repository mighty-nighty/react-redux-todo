interface ILayoutState {
  newGroupFormVisible: boolean,
  showNewTaskForm: boolean,
}

const initState: ILayoutState = {
  newGroupFormVisible: false,
  showNewTaskForm: false,
}

const layoutReducer = (state = initState, action: any) => {
  switch(action.type) {
    case 'TOGGLE_GROUP_FORM_VISIBILITY':
      let updatedGroupFormVisibility = !state.newGroupFormVisible
      return {...state, newGroupFormVisible: updatedGroupFormVisibility}
    case 'TOGGLE_TASK_FORM_VISIBILITY':      
      let updatedTaskFormVisibility = !state.showNewTaskForm
      return {...state, showNewTaskForm: updatedTaskFormVisibility}

    default:
      return state
  }
}

export default layoutReducer