import { fabric } from 'fabric';

export interface IShape {
  getDrawingObject(): any;
  height: number;
  width: number;
  top: number;
  left: number;
}
export class Shape {
  public static readonly DEFAULT_OPACITY_CONST: number = 0.5;
  public static readonly DEFAULT_FILL_COLOR: string = 'blue';
  public static readonly DEFAULT_TOP: number = 10;
  public static readonly DEFAULT_LEFT: number = 10;

  public shapeType: string = '';

  constructor(public height: number, public width: number, public left: number, public top: number, public fillColor: string = Shape.DEFAULT_FILL_COLOR) {
  }

  public static parseResponse(response: ShapeAttributes): IShape {
    if (response.shapeType === 'circle' || response.shapeType === 'oval') {
      return new Oval(response.height, response.width, this.DEFAULT_LEFT, this.DEFAULT_TOP);
    }

    if (response.shapeType === 'square' || response.shapeType === 'rectangle') {
      return new Rectangle(response.height, response.width, this.DEFAULT_LEFT, this.DEFAULT_TOP);
    }

    if (response.shapeType === 'triangle') {
      return new Triangle(response.height, response.width, this.DEFAULT_LEFT, this.DEFAULT_TOP);
    }

    if (response.shapeType === 'parallelogram') {
      return new Parallelogram(response.height, response.width, this.DEFAULT_LEFT, this.DEFAULT_TOP);
    }

    return new Polygon(response.numberOfAngles, response.height, response.width, response.side, this.DEFAULT_LEFT, this.DEFAULT_TOP);
  }

  protected getPolygonCoordinates(numberOfAngles: number, height: number, width: number, xCenter: number, yCenter: number): any {
    let xyCords = [];

    for (var i = 1; i <= numberOfAngles; i += 1) {
      xyCords.push({
        x: xCenter + (width / 2) * Math.cos(i * 2 * Math.PI / numberOfAngles), 
        y: yCenter + (height / 2) * Math.sin(i * 2 * Math.PI / numberOfAngles)
      });
    }

    return xyCords;
  }
  
  protected getPolygonCoordinatesBySideLength(numberOfAngles: number, side: number, xCenter: number, yCenter: number): any {
    let xyCords = [];

    for (var i = 1; i <= numberOfAngles; i += 1) {
      xyCords.push({
        x: xCenter + (side) * Math.cos(i * 2 * Math.PI / numberOfAngles),
        y: yCenter + (side) * Math.sin(i * 2 * Math.PI / numberOfAngles)
      });
    }

    return xyCords;
  }
}

export class Oval extends Shape implements IShape {
  public getDrawingObject(): any {
    return new fabric.Ellipse({
      left: this.left,
      top: this.top,
      rx: this.width / 2,
      ry: this.height / 2,
      fill: this.fillColor, opacity: Shape.DEFAULT_OPACITY_CONST
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
      fill: this.fillColor, opacity: Shape.DEFAULT_OPACITY_CONST
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
      fill: this.fillColor, opacity: Shape.DEFAULT_OPACITY_CONST
    });
  }
}

export class Parallelogram extends Shape implements IShape {
  constructor(height: number, width: number, left: number, top: number, fillColor: string = Shape.DEFAULT_FILL_COLOR) {
    super(height, width, left, top, fillColor);
  }

  public getDrawingObject(side: number = null): any {
    //let shapeLeftPos = 0, shapeTopPos = 0;
    let xyCords = [
      { x: this.left, y: this.top },
      { x: this.left + this.width, y: this.top },
      { x: this.left + this.width - (this.width * 0.2), y: this.top + this.height},
      { x: this.left - (this.width * 0.2), y: this.top + this.height}
    ];

    return new fabric.Polygon(xyCords, {
      left: this.left,
      top: this.top,
      angle: 0,
      fill: this.fillColor, opacity: 0.5
    });
  }
}

export class Polygon extends Shape implements IShape {
  constructor(public numberOfAngles: number, height: number, width: number, private side:number, left: number, top: number, fillColor: string = Shape.DEFAULT_FILL_COLOR) {
    super(height, width, left, top, fillColor);
  }

  public getDrawingObject(): any {
    let xyCords = [];

    if (this.side != null) {
      xyCords = this.getPolygonCoordinatesBySideLength(this.numberOfAngles, this.side,
                                                      this.left + this.width / 2, this.top + this.height / 2);
    } else {
      xyCords = this.getPolygonCoordinates(this.numberOfAngles, this.height, this.width
                                          , this.left + this.width / 2, this.top + this.height / 2);
    }

    return new fabric.Polygon(xyCords, {
      left: this.left / 2,
      top: this.top / 2,
      angle: 0,
      fill: this.fillColor, opacity: 0.5
    });
  }
}

export class PolygonTypesWithAngles {
  public static readonly Pentagon = 5;
  public static readonly Hexagon = 6;
  public static readonly Heptagon = 7;
  public static readonly Octagon = 8;
}

export class ShapeAttributes {
  public shapeType: string;
  public height: number;
  public width: number;
  public side: number;
  public numberOfAngles: number;
}
