const Sequelize = require("sequelize")
const db = new Sequelize("postgres://localhost:5432/ltcodealong", {logging: false})

const Hopper = db.define('hopper', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  stress: {
    type: Sequelize.ENUM("high", "medium", "low"),
    defaultValue: "medium"
  }
})

const Fellow = db.define('fellow', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  faveanimal: {
    type: Sequelize.STRING
  },
  age: {
    type: Sequelize.INTEGER
  }
})

Hopper.belongsTo(Fellow)
Fellow.hasMany(Hopper)

module.exports = {
  db,
  Hopper,
  Fellow
}
