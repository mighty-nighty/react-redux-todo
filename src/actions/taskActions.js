export const addTask = (name) => {
  return {type: 'ADD_TASK', payload: name}
}

export const deleteTask = (id) => {
  return {type: 'DELETE_TASK', payload: id}
}