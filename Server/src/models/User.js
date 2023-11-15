const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('User', 
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
      email:{
         type: DataTypes.STRING,
               allowNull: false,
               isEmail: true,
               unique: true,
        },
   }, { timestamps: false });
};







/* email:{
 type: DataTypes.STRING,
       allowNull: false,
       isEmail: true,
},
password:{
 type: DataTypes.STRING,
       allowNull: false,
       primaryKey: true
} */
