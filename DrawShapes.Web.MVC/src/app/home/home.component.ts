import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {fabric} from 'fabric';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  canvas: any;

  constructor(private http: Http) {
    //let options = { headers: { 'content-type': 'text/plain' } } as any;
    //let body = { body: 'test' };
    //http.post('api/values/parse', 'test', options).subscribe(result => {
    //  debugger;
    //  window.alert(result);
    //}, error => console.error(error));
  }

  ngOnInit() {

    this.canvas = new fabric.Canvas('canvas', {
      width: 800,
      height: 500
    });

    this.canvas.add(new fabric.Rect({
      left: 100,
      top: 100,
      width: 50,
      height: 50,
      fill: '#faa'
    }));

    this.canvas.add(new fabric.Circle({
      left: 200,
      top: 100,
      radius: 25,
      fill: 'yellow'
    }));

    //this.canvas.add(new fabric.Triangle({
    //  left: 300,
    //  top: 100,
    //  width: 50,
    //  height: 150,
    //  fill: '#aaf'
    //}));

    //var path = new fabric.Path('M 0 0 L 300 100 L 200 300 z');
    //path.set({ fill: 'red', stroke: 'green', opacity: 0.5 });
    //this.canvas.add(path);

    // hexagon
    var numberOfSides = 6,
      size = 200,
      Xcenter = 100,
      Ycenter = 100;


    let xyCords = this.getPolygonCoordinates(numberOfSides, size, Xcenter, Ycenter);
    var pol = new fabric.Polygon(xyCords, {
        left: 10,
        top: 10,
        angle: 0,
        fill: 'blue', stroke: 'green', opacity: 0.5
      }
    );
    this.canvas.add(pol);


  }
  
  private getPolygonCoordinates(numberOfSides: number, size: number, xCenter: number, yCenter: number) : any {
    let xyCords = [];

    for (var i = 1; i <= numberOfSides; i += 1) {
      xyCords.push({ x: xCenter + (size / 2) * Math.cos(i * 2 * Math.PI / numberOfSides), y: yCenter + (size / 2) * Math.sin(i * 2 * Math.PI / numberOfSides) });
    }

    return xyCords;
  }
}
