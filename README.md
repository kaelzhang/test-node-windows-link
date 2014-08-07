# test-node-windows-link [![NPM version](https://badge.fury.io/js/test-node-windows-link.svg)](http://badge.fury.io/js/test-node-windows-link) [![Build Status](https://travis-ci.org/kaelzhang/test-node-windows-link.svg?branch=master)](https://travis-ci.org/kaelzhang/test-node-windows-link) [![Dependency Status](https://gemnasium.com/kaelzhang/test-node-windows-link.svg)](https://gemnasium.com/kaelzhang/test-node-windows-link)

Test `fs.link` and `fs.symlink` on linux and windows

## Result

- 'junction' will be ignored by linux
- windows chrome could not open javascript symlink by file protocol, but others could
  - windows chrome can open it by http protocol
- if creates a symlink of junction type from a file, all browsers on windows could not open it
- all platform could not create a hard link from a dir
