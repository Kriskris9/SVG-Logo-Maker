class SVG {

  constructor() {
    this.shape = "";
    this.text = "";
  }  

  setText(message, color) {
    if (message.length > 3) {
      throw new Error("Text must not exceed 3 characters.");}
    this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${message}</text>`;
  
  }
  setShape(shape) {
    this.shape = shape.render();
  }
  render() { 
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.text}</svg>`;
  }
}



class Circle {
  constructor() {
    this.color = null;
  }
setColor(color) {
    this.color = color;
  }

  render() { 
   return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
  }
  
}

class Triangle {
  constructor() {
    this.color = "";
  }
  setColor(color) {
    this.color = color;
  }
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
  }

class Square {
  constructor() {
    this.color = ""
  }
  setColor(color) {
    this.color = color;
  }
    render() {
      return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`;
    }
  }


module.exports = {SVG,Circle, Triangle, Square }


