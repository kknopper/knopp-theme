const config = {};
config.debug = true;

//Console.logs only when debug set to true
export function debug(log) {
	if (config.debug) {
		console.log(log);
	}
}