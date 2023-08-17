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
      //we cloned the basket
      let newBasket = [...state.basket];
      //we check to see if product exists
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        //item exists in basket, remove it
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) as its not in the cart`
        );
      }
      return { ...state, basket: newBasket };

    default:
      return state;
  }
};

export default reducer;
