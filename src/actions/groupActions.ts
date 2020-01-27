export const addGroup = (name: any) => {
  return {type: 'ADD_GROUP', payload: name}
}

export const deleteGroup = (index: any) => {
  return {type: 'DELETE_GROUP', payload: index}
}

export const selectGroup = (index: any) => {
  return {type: 'SELECT_GROUP', payload: index}
}

