#!/usr/bin/env ts-node

const program = require("commander");

program
	.version('1.1')
	.description('CLI APP');

program.parse(process.argv);