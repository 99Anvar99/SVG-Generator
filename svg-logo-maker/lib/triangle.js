const Logo = require('./shapes');
class Triangle extends Logo {
  render() {
      const { text, textColor, backgroundColor } = this;
      return `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" width="300" height="200">
      <polygon points="150, 18 244, 182 56, 182" fill="${backgroundColor}" />
      <text x="150" y="125" text-anchor="middle" dy=".3em" fill="${textColor}" font-size="48" font-family="Arial, sans-serif">
      ${text}
      </text>
      </svg>
    `;
  }
}
module.exports = Triangle;