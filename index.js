'use strict';
const registerLink = require('jsdoc/util/templateHelper').registerLink;
let extdocs    = {},
    customdocs = {};

try {
    extdocs = require('./external-docs.json');
    customdocs = require('../../external-docs.json');
} catch (e) {}

Object.assign(extdocs, customdocs);

exports.handlers = {
    parseBegin() {
        for (const key of Object.keys(extdocs)) {
            registerLink(key, extdocs[key]);
        }
    }
};
