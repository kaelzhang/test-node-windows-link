#!/usr/bin/env node

'use strict';

var fs = require('fs');
var node_path = require('path');

fs.symlinkSync(node_path.join(__dirname, 'a'), node_path.join(__dirname, 'a.js'));
fs.symlinkSync(node_path.join(__dirname, 'b'), node_path.join(__dirname, 'b.js'), 'junction');

fs.symlinkSync(node_path.join(__dirname, 'c'), node_path.join(__dirname, 'c.js'));
fs.symlinkSync(node_path.join(__dirname, 'd'), node_path.join(__dirname, 'd.js'), 'dir');

fs.symlinkSync(node_path.join(__dirname, 'e'), node_path.join(__dirname, 'e.js'), 'junction');

fs.linkSync(node_path.join(__dirname, 'f'), node_path.join(__dirname, 'f.js'));
fs.linkSync(node_path.join(__dirname, 'g'), node_path.join(__dirname, 'g.js'));