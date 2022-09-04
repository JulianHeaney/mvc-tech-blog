const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
    {
        username: 'abbygravy00',
        email: 'atrueartist@dog.bark',
        password: 'password111'
    },
    {
        username: 'jbradley11',
        email: 'mygoodfriend@bird.wing',
        password: 'password222'
    },
    {
        username: 'jheaney22',
        email: 'thisdudehere@turtle.shell',
        password: 'password333'
    }
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;