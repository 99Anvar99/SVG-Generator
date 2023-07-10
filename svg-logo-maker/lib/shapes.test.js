const Circle = require('./circle');
const Square = require('./square');
const Triangle = require('./triangle');
test('Circle render() method should return correct SVG string with given shape color', () => {
    const circle = new Circle('C', 'white', 'Circle', 'red');
    const rendered = circle.render();
    const circleRegExp = /<circle[^>]*fill="red"[^>]*>/;
    expect(rendered).toMatch(circleRegExp);
});
test('Square render() method should return correct SVG string with given shape color', () => {
    const square = new Square('S', 'white', 'Square', 'green');
    const rendered = square.render();
    const rectRegExp = /<rect[^>]*fill="green"[^>]*>/;
    expect(rendered).toMatch(rectRegExp);
});
test('Triangle render() method should return correct SVG string with given shape color', () => {
    const triangle = new Triangle('T', 'white', 'Triangle', 'blue');
    const rendered = triangle.render();
    const polygonRegExp = /<polygon[^>]*fill="blue"[^>]*>/;
    expect(rendered).toMatch(polygonRegExp);
});