class SVG {

  constructor() {
    this.fillcolor = "";
    this.shape = "";
    this.text = "";
    this.textColor = "";
  }
  setColor(color) {
    this.fillColor = color;
  }
  setText(message, color) {
    this.textColor = textColor;
    if (message.length > 3) {
      throw new Error("Text must not exceed 3 characters.");}
    this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}"> ${this.text} </text>`;
    
    
  }
  setShape(shape) {
    this.shape = shape; 
  }
  render() { 
    return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg"> ${this.shape}${this.text} </svg>`;
  }
}



class Circle extends SVG {
  constructor() {
    
  }

  getShape() {
    return `<${this.shape} cx="150" cy="100" r="80" fill="${this.fillColor}" />`;
  }

  getShapeClass() {
    // return 'Circle'
  }
}

class Triangle extends SVG {
  constructor() {}
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.fillColor}" />`;
    }
  }

class Square extends SVG {
  constructor() {
  
  }
    render() {
      return `<rect x="90" y="40" width="120" height="120" fill="${this.fillColor}" />`;
    }
  }


module.exports = { SVG, Circle, Triangle, Square }


