const fs = require('fs');
const inquirer = require('inquirer');
const {Circle, Triangle, Square} = require("./shapes.js")


inquirer
  .prompt([
    {
      type: 'list',
      name: 'shape',
      message: 'What shape would you like your logo to be? Please choose between a circle, polygon(triangle), or rect(square).',
      choices: ['circle', 'polygon', 'rect'],
    },
    {
      type: 'input',
      name: 'text',
      message: "What would you like your logo text to be? Please enter up to three characters."
    },
    {
      type: 'input',
      name: 'textColor',
      message: "What color would you like your text to be? Please enter a color keyword or hexadecimal number.",
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: "What color would you like your shape color to be? Please enter a color keyword or hexadecimal number.",
    },
    
  ])

  .then((logo) => {

    console.log(logo)
    const {shape, text, textColor, shapeColor } = logo;

    let logoCreated;
    
    const circleLogo = () => {
      return `<svg version="1.1"
          width="300" height="200"
          xmlns="http://www.w3.org/2000/svg">
      
      
       <${shape} cx="150" cy="100" r="80" fill="${shapeColor}"/>
      
       <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
      
      </svg>`
          
    }
    
    const polygonLogo = () => {
      return `<svg version="1.1"
          width="300" height="200"
          xmlns="http://www.w3.org/2000/svg">
      
      
       <${shape} points="150, 18 244, 182 56, 182"  fill="${shapeColor}"/>
      
       <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
      
      </svg>`
    }
    
    const squareLogo = () => {
      return `<svg version="1.1"
          width="300" height="200"
          xmlns="http://www.w3.org/2000/svg">
      
      
       <${shape} x="90" y="40" width="120" height="120"  fill="${shapeColor}"/>
      
       <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
      
      </svg>`
    }


    switch (shape) {
      case 'circle':
        logoCreated = circleLogo();
        break;
      case 'polygon':
        logoCreated = polygonLogo();
        break;
      case 'triangle':
        logoCreated = squareLogo() ;
        break;
    
      default:
        break;
    }


  fs.writeFile('logo.svg', logoCreated, (err) => {
    if (err) throw err;
    console.log('Generated logo.svg');
  });

});