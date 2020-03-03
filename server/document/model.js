const Sequelize = require("sequelize");
const sequelize = require("../db");
const Room = require("../room/model");

const Document = sequelize.define("document", {
  document_name: {
    type: Sequelize.STRING
  },
  name_on_invoice: {
    type: Sequelize.STRING,
    allowNull: false
  },
  device_name: {
    type: Sequelize.STRING
  },
  purchase_date: {
    type: Sequelize.DATE,
    allowNull: false
  },
  warranty_start_date: {
    type: Sequelize.DATE,
    allowNull: false
  },
  warranty_end_date: {
    type: Sequelize.DATE,
    allowNull: false
  },
  warranty_doc_image: {
    type: Sequelize.STRING,
    allowNull: false
  },
  other_image: {
    type: Sequelize.STRING
  }
});

Room.hasMany(Document);
Document.belongsTo(Room);

module.exports = Document;
