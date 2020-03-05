const { Router } = require("express");
const Room = require("./model");

const router = new Router();

router.post("/room", async (request, response, next) => {
  try {
    console.log("---the request body of rrom post --", request.body);
    const createdRoom = await Room.create({
      room_name: request.body.roomName
    });
    response.send(createdRoom);
  } catch {
    error => next(error);
  }
});

router.get("/rooms", async (request, response, next) => {
  try {
    const fetchedRooms = await Room.findAll();
    response.send(fetchedRooms);
  } catch {
    error => next(error);
  }
});

module.exports = router;
