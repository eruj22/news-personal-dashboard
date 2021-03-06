export const initialState = {
  location: "",
  category: [],
  cardNumber: 1,
}

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_CATEGORIES":
      return {
        ...state,
        category: [...state.category, action.category],
      }

    case "NEXT_CARD":
      return {
        ...state,
        cardNumber: state.cardNumber + 1,
      }

    case "RESET":
      return {
        location: state.location,
        category: [],
        cardNumber: 1,
      }

    default:
      throw new Error("error")
  }
}

export default reducer
