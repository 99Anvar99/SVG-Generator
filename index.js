// import required modules
const inquirer = require('inquirer');
const fs = require('fs');
const Circle = require('./svg-logo-maker/lib/circle');
const Square = require('./svg-logo-maker/lib/square');
const Triangle = require('./svg-logo-maker/lib/triangle');
async function getUserInput () {
    const qs = [
        {
            type: 'input',
            name: 'userText',
            message: 'Enter the text for your logo (3 characters max):',
            validate: input => input.length <= 3 || 'Invalid entry! Text must be 3 characters or less.',
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter your text color of choice (e.g., red, blue, #123456, rgb(255, 0, 0)):',
            validate: function (value) {
                if (value) {
                    return true;
                } else {
                    return 'Please enter a valid color.';
                }
            },

        },
        {
            type: 'input',
            name: 'backgroundColor',
            message: 'Enter your background color of choice (e.g., black, green, #123456, rgb(255, 0, 0)):',
            validate: function (value) {
                if (value) {
                    return true;
                } else {
                    return 'Please enter a valid color.';
                }
            },
        },
        {
            type: 'list',
            name: 'userShape',
            message: 'Select a shape for your shape:',
            choices: ['Circle', 'Square', 'Triangle'],
        },

    ];
    return await inquirer.prompt(qs);
}
function createLogo({ userText, textColor, userShape, backgroundColor }) {
    switch (userShape) {
        case 'Circle':
            return new Circle(userText, textColor, userShape, backgroundColor);
        case 'Square':
            return new Square(userText, textColor, userShape, backgroundColor);
        case 'Triangle':
            return new Triangle(userText, textColor, userShape, backgroundColor);
        default:
            throw new Error('Invalid shape specified');
    }
}
function saveSvgToFile(svg, fileName) {
    fs.writeFile(fileName, svg, (err) => {
        if (err) {
            console.error('Error saving SVG file:', err);
        } else {
            console.log('SVG file successfully saved as ${fileName}');
        }
    });
}
(async () => {
    try {
        const userInput = await getUserInput();
        console.log(userInput);
        const logo = createLogo(userInput);
        const svg = logo.render();
        saveSvgToFile(svg, 'logo.svg');
    } catch (err) {
        console.error('Error:', err.message);
    }
})();