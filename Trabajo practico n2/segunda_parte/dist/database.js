"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
const { COUNTRY_APP_MONGOSB_HOST, COUNTRY_APP_MONGOSB_DATABASE } = process.env;
const MONGODB_URI = `mongosb://${COUNTRY_APP_MONGOSB_HOST}/${COUNTRY_APP_MONGOSB_DATABASE}`;
mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(db => console.log("Database is connected"))
    .catch(err => console.log(err));
//# sourceMappingURL=database.js.map