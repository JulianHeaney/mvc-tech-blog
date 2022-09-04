const { Comment } = require('../models');

const commentdata = [
    {
        comment_text: 'I like that the symbol is a cute dinosaur.',
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: 'I think JS is the past, present, and future.',
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: 'Can you believe we get to learn about this stuff?',
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;