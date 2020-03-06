const initialState = { rooms: [], currentRoom: null };

const roomReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "ROOM_CREATED": {
      return { ...state, rooms: [...state.rooms, action.payload] };
    }
    case "ROOMS_FETCHED": {
      return { ...state, rooms: action.payload };
    }
    case "UPDATE_CURRENT_ROOM": {
      return { ...state, currentRoom: action.payload };
    }
    case "CLEAR_USER_DATA": {
      return { ...initialState };
    }
    default: {
      return { ...state };
    }
  }
};

export default roomReducer;
