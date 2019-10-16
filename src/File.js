const fs = require('fs');

const format = 'utf8';

/**
 * @class
 * @param path {string} Path of the css file
 */
class File {
  constructor(path, format) {
    this.path = path;
    this.content = {
      buffer: null,
      string: null
    };
  }

  read() {
    this.content.buffer = fs.readFileSync(this.path, format);
  }

  toString() {
    this.content.string = this.content.buffer.toString();
  }

  write(content, outputPath) {
    fs.writeFileSync(outputPath, content);
  }

  get buffer() {
    return this.content.buffer;
  }

  get string() {
    return this.content.string;
  }
}

module.exports = File;