var moment = require("moment");
var een = moment("2021-03-26 16:03:46");
var twee = moment("2020-03-10 16:03:46");
var duration = moment.duration(een.diff(twee));

console.log("the --surrent moment---------", duration.as("days"));
console.log("the --surrent moment---------", duration.as("years"));
