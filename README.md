# SVG-Generator
An SVG generator is a tool or software that allows users to create scalable vector graphics (SVG) files. SVG generators are commonly used by web designers, developers, and graphic artists to create high-quality, resolution-independent graphics for websites, applications, and print materials.

# Installation
- In the command line, run the following command:
```
npm install inquirer@8.2.4 jest
```

# Testing
- Before testing the program, ensure that you are located within the main project directory.
- Next, open your terminal and execute:
```
npm test
```

# Usage
- To begin, clone the repository to your local drive and follow the instructions for installing the dependencies provided earlier. After that, navigate to the project directory by using the 'CD' command in your terminal. Finally, execute the command 'node index.js' to initiate the process. Once done, you will receive a set of brief questions regarding text, color, and shape. Answering these questions will generate a new logo, which will be saved in your project directory.

### User Story

```md
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```