const defaultState = {
  inputValue: '123'
}
export default (state = defaultState, action) => {
  if (action.type === 'change_input_value') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    console.log('新的store', newState)
    return newState
  }
  return state
}