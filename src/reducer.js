export const initialState = {
  basket: [],
  user: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "Add_to_Basket":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "Remove_from_Basket":
      return { state };
      break;

    default:
      return state;
  }
};

export default reducer;
