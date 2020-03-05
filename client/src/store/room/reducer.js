const initalState = { rooms: [] };

const roomReducer = (state = initalState, action = {}) => {
  switch (action.type) {
    case "ROOM_CREATED": {
      return { ...state, rooms: [...state.rooms, action.payload] };
    }
    default: {
      return { ...state };
    }
  }
};

export default roomReducer;
