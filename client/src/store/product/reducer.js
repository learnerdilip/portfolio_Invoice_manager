const initalState = { products: [], currentProduct: null };

const productReducer = (state = initalState, action = {}) => {
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
    default: {
      return { ...state };
    }
  }
};

export default productReducer;
