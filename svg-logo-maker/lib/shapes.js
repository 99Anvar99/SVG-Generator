class Shape {
    constructor(userText, textColor, userShape, backgroundColor) {
        this.text = userText;
        this.textColor = textColor;
        this.shape = userShape;
        this.backgroundColor = backgroundColor;
    }
    makeSVG() {
        throw new Error('makeSVG() must be implemented in a subclass.');
    }
}
module.exports = Shape;