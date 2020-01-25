export const addGroup = (name: any) => {
  return {type: 'ADD_GROUP', payload: name}
}

export const deleteGroup = (index: any) => {
  return {type: 'DELETE_GROUP', payload: index}
}

export const selectGroup = (index: any) => {
  return {type: 'SELECT_GROUP', payload: index}
}

export const addTask = (name: any) => {
  return {type: 'ADD_TASK', payload: name}
}

export const deleteTask = (index: any) => {
  return {type: 'DELETE_TASK', payload: index}
}

export const changeTaskStatus = (index: any) => {
  return {type: 'CHANGE_TASK_STATUS', payload: index}
}