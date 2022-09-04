const { Post } = require('../models');

const postdata = [
    {
        title: 'Is Deno the new Node?',
        description: 'Ryan Dahl says no.',
        user_id: 1
    },
    {
        title: 'Is javascript worth it?',
        description: 'I do not want to be difficult about this, but I think yes it is! Javascript all day every day!',
        user_id: 2
    },
    {
        title: 'Object-Relational Mapping',
        description: 'I just started learning about this, and I have never felt so alive!',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;