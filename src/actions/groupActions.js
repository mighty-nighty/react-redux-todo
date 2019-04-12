export const addGroup = name => {
  return {type: 'ADD_GROUP', payload: name}
}

export const deleteGroup = index => {
  return {type: 'DELETE_GROUP', payload: index}
}

export const selectGroup = index => {
  return {type: 'SELECT_GROUP', payload: index}
}

export const addTask = (name) => {
  return {type: 'ADD_TASK', payload: name}
}

export const deleteTask = (index) => {
  return {type: 'DELETE_TASK', payload: index}
}

export const changeTaskStatus = (index) => {
  return {type: 'CHANGE_TASK_STATUS', payload: index}
}