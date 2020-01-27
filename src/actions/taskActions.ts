export const addTask = (name: any) => {
  return {type: 'ADD_TASK', payload: name}
}

export const deleteTask = (index: any) => {
  return {type: 'DELETE_TASK', payload: index}
}

export const changeTaskStatus = (index: any) => {
  return {type: 'CHANGE_TASK_STATUS', payload: index}
}