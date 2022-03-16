const { Client } = require("discord.js");
const mongoose = require('mongoose');
const { Database } = require('../../Structures/config.json');

module.exports = {
    name: 'ready',
    once: true,
    /**
     * @param {Client} client
    */
    execute(client) {
        console.log('Ready sir');
        client.user.setActivity('Debatably sus content', {type: 'WATCHING'});

        if(!Database) return;
        mongoose.connect(Database, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).then(() => {
            console.log('connected to database');
        }).catch((err) => {
            console.log(err)
        });
    }
}