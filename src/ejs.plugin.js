var ejs = require("ejs");

module.exports = function (BasePlugin) {
	function EjsPlugin() {
		BasePlugin.apply(this, arguments);
	}

	var prototype = EjsPlugin.prototype = Object.create(BasePlugin.prototype);

	prototype.name = "ejs";

	prototype.render = function (options, next) {
		if (options.inExtension === "ejs") {
			options.content = ejs.render(options.content, options.templateData);
		}

		return next();
	};

	return EjsPlugin;
};
