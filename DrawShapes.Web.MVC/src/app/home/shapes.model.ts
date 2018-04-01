import { fabric } from 'fabric';

interface IShape {
  getDrawingObject(): any;
}
export class Shape {
  //public fillColor: string = 'blue';
  public static readonly OPACITY_CONST: number = 0.5;

  constructor(public height: number, public width: number, public left: number, public top: number, public fillColor: string = 'blue') {
  }
}

export class Oval extends Shape implements IShape {
  public getDrawingObject(): any {
    return new fabric.Ellipse({
      left: this.left,
      top: this.top,
      rx: this.width / 2,
      ry: this.height / 2,
      fill: this.fillColor, opacity: Shape.OPACITY_CONST
    });
  }
}


export class Triangle extends Shape implements IShape {
  public getDrawingObject(): any {
    return new fabric.Triangle({
      left: this.left,
      top: this.top,
      width: this.width,
      height: this.height,
      fill: this.fillColor, opacity: Shape.OPACITY_CONST
    });
  }
}

export class Rectangle extends Shape implements IShape {
  public getDrawingObject(): any {
    return new fabric.Rect({
      left: this.left,
      top: this.top,
      width: this.width,
      height: this.height,
      fill: this.fillColor, opacity: Shape.OPACITY_CONST
    });
  }
}
