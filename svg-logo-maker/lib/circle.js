const Logo = require('./shapes');
class Circle extends Logo {
    render() {
        const { text, textColor, backgroundColor } = this;
        return `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" width="300" height="200">
        <circle cx="150" cy="100" r="90" fill="${backgroundColor}" />
        <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="${textColor}" font-size="48" font-family="Arial, sans-serif">
        ${text}
        </text>
        </svg>
      `;
    }
}
module.exports = Circle;