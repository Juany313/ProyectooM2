const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define("Favorite", 
   {
      id: {
         type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true,
     },
     name: {
         type: DataTypes.STRING,
         unique: true,
         allowNull: false
     },
     image: {
        type: DataTypes.STRING,
     }
    /*  gender: {
         type: DataTypes.STRING
     },
     status: {
         type: DataTypes.ENUM("Alive", "Dead", "Unknown"),
         defaultValue: "Alive",
     },
     origin: {
         type: DataTypes.STRING
     },
     species: {
         type: DataTypes.STRING
     }, */
 
 },
 {
     timestamps: false,
 });
};


