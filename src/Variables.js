/**
 * @class
 * @param css {string} CSS code from the targeted file
 */
class Variables {
  constructor(css) {
    this.css = css;
  }

  // Remove all variables from css code
  remove() {
    [...this.css
      .matchAll(/var\(--([\w-]+)\)/g)]
      .forEach(value => {
        const re = new RegExp(`${value[1]}: (.+);`);
        this.css = this.css.replace(value[0], [...this.css.matchAll(re)][0][1]);
      });
  }
}

module.exports = Variables;