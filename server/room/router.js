const { Router } = require("express");
const Room = require("./model");
const auth = require("../auth/middleWare");

const router = new Router();

router.post("/room", auth, async (request, response, next) => {
  try {
    const createdRoom = await Room.create({
      room_name: request.body.roomName,
      userId: request.user.id
    });
    response.send(createdRoom);
  } catch {
    error => next(error);
  }
});

router.get("/rooms", auth, async (request, response, next) => {
  try {
    const fetchedRooms = await Room.findAll({
      where: { userId: request.user.id }
    });
    response.send(fetchedRooms);
  } catch {
    error => next(error);
  }
});

module.exports = router;
