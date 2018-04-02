import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {fabric} from 'fabric';
import * as Shapes from './shapes.model';
import {HomeModel} from './home.model';
import { ShapesService } from './shapes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public model = new HomeModel();
  canvas: any;

  constructor(private http: Http, private shapesService: ShapesService) {
    //let options = { headers: { 'content-type': 'text/plain' } } as any;
    //let body = { body: 'test' };
    //http.post('api/values/parse', 'my posted value', options).subscribe(result => {
    //  //debugger;
    //  console.log(result.json());
    //}, error => console.error(error));

    shapesService.parsingCompletedObserver.subscribe(apiResponse => {
      if (apiResponse != null) {
        this.canvas.add(apiResponse.getDrawingObject());
      }
    });
  }

  ngOnInit() {

    this.canvas = new fabric.Canvas('canvas', {
      //width: 800,
      //height: 500
    });
    this.canvas.setDimensions({ width: '100%', height: '100%' }, { cssOnly: true });
    let height = 150, width = 100, left = 200, top = 100;

    //this.canvas.add(new fabric.Rect({
    //  left: 100,
    //  top: 100,
    //  width: 50,
    //  height: 50,
    //  fill: '#faa'
    //}));

    //let radius = 50, left = 200, top = 100;
    //let circle = new Shapes.Circle(radius, left, top);
    //this.canvas.add(circle.getCircleObject());

    
    //let oval = new Shapes.Oval(height, height, left, top);
    //this.canvas.add(oval.getDrawingObject());


    //let triangle = new Shapes.Triangle(height, height, left, top);
    //this.canvas.add(triangle.getDrawingObject());

    //let rectangle = new Shapes.Rectangle(height, width, left, top);
    //this.canvas.add(rectangle.getDrawingObject());

    //let square = new Shapes.Rectangle(height, height, left, top);
    //this.canvas.add(square.getDrawingObject());

    //var path = new fabric.Path('M 0 0 L 300 100 L 200 300 z');
    //path.set({ fill: 'red', stroke: 'green', opacity: 0.5 });
    //this.canvas.add(path);

    // hexagon
    //var numberOfSides = 7,
    //  size = 200,
    //  Xcenter = 100,
    //  Ycenter = 100;


    //let xyCords = this.getPolygonCoordinates(numberOfSides, size, Xcenter, Ycenter);
    //var pol = new fabric.Polygon(xyCords, {
    //    left: 10,
    //    top: 10,
    //    angle: 0,
    //    fill: 'blue', stroke: 'green', opacity: 0.5
    //  }
    //);
    //this.canvas.add(pol);

    //let polygon = new Shapes.Polygon(Shapes.PolygonTypesWithAngles.Pentagon, height, width, left, top);
    //this.canvas.add(polygon.getDrawingObject());

    //let parallelogram = new Shapes.Parallelogram(height, width, left, top);
    //this.canvas.add(parallelogram.getDrawingObject());
  }

  public draw(): void {
    this.shapesService.parse(this.model.command);
  }
}
