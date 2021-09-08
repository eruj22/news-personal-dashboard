export const initialState = {
  location: "",
  category: [],
}

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_LOCATION":
      return {
        ...state,
        location: action.location,
      }

    case "GET_CATEGORIES":
      return {
        ...state,
        category: [...state.category, action.category],
      }

    default:
      return state
  }
}

export default reducer
