export const initialState = {
  basket: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      const item = action.item;
      const oldBasket = state.basket;

      const prod = oldBasket.filter((i) => i.id === item.id);

      if (!prod.length) {
        console.log("run")
        item.qty = 1;
        return {
          ...state,
          basket: [...state.basket, item],
        };
      }

      // console.log("run")
      const prodItem = prod[0]
      
      console.log("before", prodItem.qty);
      prodItem.qty = prodItem.qty + 1
      console.log("after", prodItem.qty);
      
      const newState = oldBasket.filter((i) => i.id !== item.id);

     
      return {
        ...state,
        basket: [...newState, prodItem],
      };

    case "REMOVE_FROM_CART":
      const newBasket = state.basket.filter(
        (item) => item.title !== action.title
      );

      return { basket: newBasket };

    default:
      return state;
  }
};
export default reducer;

//  let newcart = [state.basket];
//  const index = state.basket.findIndex(
//    (basketitem) => basketitem.title === action.title
//  );

//  if (index >= 0) {
//    newcart.splice(index, 1);
//  } else {
//    console.log("there were errors while removing the product from cart");
//  }

//  return { ...state, basket: newcart };
