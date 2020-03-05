const initalState = { rooms: [], currentRoom: null };

const roomReducer = (state = initalState, action = {}) => {
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
    default: {
      return { ...state };
    }
  }
};

export default roomReducer;
