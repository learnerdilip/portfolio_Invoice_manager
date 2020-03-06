const { Router } = require("express");
const User = require("../user/model");
const bcrypt = require("bcrypt");
const { toJWT } = require("../auth/jwt");
const nodemailer = require("nodemailer");

const router = new Router();

router.post("/signup", (request, response, next) => {
  // console.log("--------the req body---------", request.body);
  if (!request.body.email || !request.body.password) {
    return response.send({
      status: "error",
      error: "Missing email or password"
    });
  }
  const hashedPassword = bcrypt.hashSync(request.body.password, 10); //hash password using bcrypt
  const user = { ...request.body, password: hashedPassword };
  User.create(user)
    .then(user => {
      response.send(user);
      //sending mails
      var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "paladinistormentor@gmail.com",
          pass: "paladin#1"
        }
      });

      var mailOptions = {
        from: "paladinistormentor@gmail.com",
        to: user.email,
        subject: "Thank you for signing up on Invoice Manager created by Dilip",
        text:
          "Thank you for signing up, you can now manage your warranty documents for your home appliances very easily"
      };

      transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
    })
    .catch(e => {
      // console.log(JSON.stringify(e.errors[0].message, null, 2));
      response.send({
        error: true,
        message: "Something went wrong"
      });
    });
});

router.post("/login", async (request, response) => {
  console.log(request.body);

  const user = await User.findOne({ where: { email: request.body.email } });

  const passwordValid = bcrypt.compareSync(
    request.body.password,
    user.password
  );

  if (passwordValid) {
    const userNew = {
      id: user.id,
      email: user.email,
      token: toJWT({ id: user.id })
    };
    return response.send(userNew);
  } else {
    return response.send({ error: true, message: "incorrect password" });
  }
});

module.exports = router;
