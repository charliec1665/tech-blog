const Post = require('./Post');
const User = require('./User');
const Comment = require('./Comment');

// create associations
User.hasMany(Post, {
    // declare foreignkey which creates reference for the id column in the User model to link to foreign key pair, 
        // which is the user_id in the Post model
    foreignKey: 'user_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id'
});

// add reverse association
Post.belongsTo(User, {
    // declare foreignkey which is designated as user_id in the Post model
    foreignKey: 'user_id'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});



module.exports = { User, Post, Comment };