const initialState = { products: [], currentProduct: null };

const productReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "PRODUCT_CREATED": {
      return { ...state, products: [...state.products, action.payload] };
    }
    case "ROOM_PRODUCTS_FETCHED": {
      return { ...state, products: action.payload };
    }
    case "UPDATE_CURRENT_PRODUCT": {
      return { ...state, currentProduct: action.payload };
    }
    case "CLEAR_USER_DATA": {
      return { ...initialState };
    }
    case "UPDATE_DELETED_PRODUCT": {
      const data = action.payload;
      const updatedList = [...state.products].filter(
        product => product.id !== data.id
      );
      return { ...state, products: updatedList };
    }
    default: {
      return { ...state };
    }
  }
};

export default productReducer;
