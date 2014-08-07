#!/usr/bin/env node

'use strict';

var fs = require('fs');
var node_path = require('path');

fs.symlink(node_path.join(__dirname, 'a'), node_path.join(__dirname, 'a.js'));
fs.symlink(node_path.join(__dirname, 'b'), node_path.join(__dirname, 'b.js'), 'junction');

fs.symlink(node_path.join(__dirname, 'c'), node_path.join(__dirname, 'c.js'));
fs.symlink(node_path.join(__dirname, 'd'), node_path.join(__dirname, 'd.js'), 'dir');

fs.symlink(node_path.join(__dirname, 'e'), node_path.join(__dirname, 'e.js'), 'junction');