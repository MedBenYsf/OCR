'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT
  }, {});
  Post.associate = function (models) {
    // associations can be defined here
    models.Post.belongsTo(models.User)
  };
  return Post;
};