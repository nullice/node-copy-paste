exports.copy = { command: "pbcopy", args: {env:{LANG:"en_US.UTF-8"}} };
exports.paste = { command: "pbpaste", args: {env:{LANG:"en_US.UTF-8"}} };
exports.paste.full_command = exports.paste.command;
exports.encode = function(str) { return new Buffer(str, "utf8"); };
exports.decode = function(chunks) {
	if(!Array.isArray(chunks)) { chunks = [ chunks ]; }

	return Buffer.concat(chunks).toString("utf8");
};
