class Shape {
  constructor() {
    this.color = "";
  }

  setColor(color) {
    this.color = color;
  }

  render() {
   console.log(this.color);
  }

}

module.exports = Shape;
