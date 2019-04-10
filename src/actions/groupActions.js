export const addGroup = name => {
  return {type: 'ADD_GROUP', payload: name}
}

export const deleteGroup = index => {
  return {type: 'DELETE_GROUP', payload: index}
}

export const selectGroup = index => {
  return {type: 'SELECT_GROUP', payload: index}
}