const initalState = { products: [] };

const productReducer = (state = initalState, action = {}) => {
  switch (action.type) {
    case "PRODUCT_CREATED": {
      return { ...state, products: [...state.products, action.payload] };
    }
    case "PRODUCTS_FETCHED": {
      return { ...state, products: action.payload };
    }
    default: {
      return { ...state };
    }
  }
};

export default productReducer;
