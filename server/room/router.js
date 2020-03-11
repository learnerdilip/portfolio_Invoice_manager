const { Router } = require("express");
const Room = require("./model");
const auth = require("../auth/middleWare");
const MailingList = require("../mailing/model");

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
    //add the products close to expiry here
    const prodIdList = await MailingList.findAll({
      where: { email_id: request.user.email }
    });
    const productIdArr = prodIdList
      .filter(item => item.dataValues.remaining_warranty <= 30)
      .map(item => {
        return {
          productID: item.dataValues.product_id,
          warrantyLeft: item.dataValues.remaining_warranty
        };
      });
    let newFetchRoomItem = {
      roomsList: [...fetchedRooms],
      expiringProductId: productIdArr
    };
    response.send(newFetchRoomItem);
  } catch {
    error => next(error);
  }
});

module.exports = router;
