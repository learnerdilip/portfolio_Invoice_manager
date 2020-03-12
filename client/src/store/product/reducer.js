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
    case "UPDATE_EDIT_PRODUCT": {
      const removeOldEdit = [...state.products].filter(
        prod => prod.id !== action.payload.id
      );
      return { ...state, products: [...removeOldEdit, action.payload] };
    }
    default: {
      return { ...state };
    }
  }
};

export default productReducer;
