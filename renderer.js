var fs = require("fs");

function mergeValues(values, content) {
	//Cycle over the keys
	//Replace all {{key}} with the value from the values object
	for (var key in values) {
		content = content.replace("{{" + key + "}}", values[key]);
	}

	return content;
};

function view(templateName, values, response) {
	//read from the template files
	var fileContents = fs.readFileSync('./views/' + templateName + ".html", {encoding: "utf8"});
	//insert values into the content
	fileContents = mergeValues(values, fileContents);
	//write out the contents to the response
	response.write(fileContents);
}

module.exports.view = view;