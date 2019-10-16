const File = require('./src/File');
const Variables = require('./src/Variables');

// Path of the css file
const inputPath = './code.css';
const outputPath = './code-no-variables.css';

// Obtain file content
const file = new File(inputPath);
file.read();
file.toString();

// Remove variables from css code
const variables = new Variables(file.string);
variables.remove();

// Write content into new file
file.write(variables.css, outputPath);