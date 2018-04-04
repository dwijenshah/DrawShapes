import { fabric } from 'fabric';

//IShape interface defines common contract for all shape objects
export interface IShape { 
  getDrawingObject(): any;
  height: number;
  width: number;
  top: number;
  left: number;
}

//Shape object defines all common properties and methods for all shape objects.
export class Shape {
  public static readonly DEFAULT_OPACITY_CONST: number = 1; //For now , shapes are not transperant, but transperancy can be added by changing default opacity.
  public static readonly DEFAULT_FILL_COLOR: string = 'blue'; //default fill color for drawing shapes.
  public static readonly DEFAULT_BORDER_COLOR: string = 'black'; //default border color around shapes.
  public static readonly DEFAULT_TOP: number = 10;  //default starting Top point for drawing shapes.
  public static readonly DEFAULT_LEFT: number = 10;  //default starting Left point for drawing shapes.

  public shapeType: string = '';

  constructor(public height: number, public width: number, public left: number, public top: number, public fillColor: string = Shape.DEFAULT_FILL_COLOR) {
  }

  //This method parses response and creates the Shape which can draw a Fabric Shape.
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

  //This method calculates poligon points by height and width
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

  //This method calculates poligon points by side length
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

//Oval shape is responsible for rendering oval/circle using target library, in this case Fabric JS.
export class Oval extends Shape implements IShape {
  //following method returns a drawing object which is then painted on the canvas.
  public getDrawingObject(): any {
    //when height = width, Ellipse results into circle otherwise it results into oval.
    return new fabric.Ellipse({
      left: this.left,
      top: this.top,
      rx: this.width / 2,
      ry: this.height / 2,
      fill: this.fillColor, opacity: Shape.DEFAULT_OPACITY_CONST, stroke: Shape.DEFAULT_BORDER_COLOR, strokeWidth: 3, strokeDashArray: [10, 10],
    });
  }
}

//Triangle shape is responsible for rendering shape using target library, in this case Fabric JS.
export class Triangle extends Shape implements IShape {
  //following method returns a drawing object which is then painted on the canvas.
  public getDrawingObject(): any {
    return new fabric.Triangle({
      left: this.left,
      top: this.top,
      width: this.width,
      height: this.height,
      fill: this.fillColor, opacity: Shape.DEFAULT_OPACITY_CONST, stroke: Shape.DEFAULT_BORDER_COLOR, strokeWidth: 3, strokeDashArray: [10, 10],
    });
  }
}

//Rectangle shape is responsible for rendering rectangle/square using target library, in this case Fabric JS.
export class Rectangle extends Shape implements IShape {
  //following method returns a drawing object which is then painted on the canvas.
  public getDrawingObject(): any {
    //when height = width, fabric.Rect results into square otherwise it results into rectangle.
    return new fabric.Rect({
      left: this.left,
      top: this.top,
      width: this.width,
      height: this.height,
      fill: this.fillColor, opacity: Shape.DEFAULT_OPACITY_CONST, stroke: Shape.DEFAULT_BORDER_COLOR, strokeWidth: 3, strokeDashArray: [10, 10],
    });
  }
}

//Parallelogram shape is responsible for rendering a polygon using target library, in this case Fabric JS.
export class Parallelogram extends Shape implements IShape {
  constructor(height: number, width: number, left: number, top: number, fillColor: string = Shape.DEFAULT_FILL_COLOR) {
    super(height, width, left, top, fillColor);
  }

  //following method calculates all four points of a polygon which the lines are connected to.
  public getDrawingObject(side: number = null): any {
    let xyCords = [
      { x: this.left, y: this.top },  //start with top left position.
      { x: this.left + this.width, y: this.top }, //move and create a point to draw line to top right position.
      { x: this.left + this.width - (this.width * 0.2), y: this.top + this.height }, //move and create a point to draw line to bottom right position.
      { x: this.left - (this.width * 0.2), y: this.top + this.height } //move and create a point to draw line to bottom left position.
    ];

    //draw the polygon with x and y co-ordinate points calculated above.
    return new fabric.Polygon(xyCords, {
      left: this.left,
      top: this.top,
      angle: 0,
      fill: this.fillColor, opacity: Shape.DEFAULT_OPACITY_CONST, stroke: Shape.DEFAULT_BORDER_COLOR, strokeWidth: 3, strokeDashArray: [10, 10],
    });
  }
}

//Polygon shape is responsible for rendering a Pentagon or Hexagon or Heptagon or Octagon using target library, in this case Fabric JS.
export class Polygon extends Shape implements IShape {
  constructor(public numberOfAngles: number, height: number, width: number, private side:number, left: number, top: number, fillColor: string = Shape.DEFAULT_FILL_COLOR) {
    super(height, width, left, top, fillColor);
  }

  public getDrawingObject(): any {
    let xyCords = [];

    if (this.side != null) {
      //calculate x and y co-ordinates using length of all sides.
      xyCords = this.getPolygonCoordinatesBySideLength(this.numberOfAngles, this.side,
                                                      this.left + this.width / 2, this.top + this.height / 2);
    } else {
      //calculate x and y co-ordinates using height and width of polygon.
      xyCords = this.getPolygonCoordinates(this.numberOfAngles, this.height, this.width
                                          , this.left + this.width / 2, this.top + this.height / 2);
    }

    //draw the polygon with x and y co-ordinate points calculated above.
    return new fabric.Polygon(xyCords, {
      left: 10,
      top: 10,
      angle: 0,
      fill: this.fillColor, opacity: Shape.DEFAULT_OPACITY_CONST, stroke: Shape.DEFAULT_BORDER_COLOR, strokeWidth: 3, strokeDashArray: [10, 10],
    });
  }
}

export class ShapeAttributes {
  public shapeType: string;
  public height: number;
  public width: number;
  public side: number;
  public numberOfAngles: number;
}
