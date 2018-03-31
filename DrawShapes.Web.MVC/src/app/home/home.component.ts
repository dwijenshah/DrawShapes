import { Component, OnInit } from '@angular/core';
// import * as fabric from 'fabric';
import {fabric} from 'fabric';

// import 'fabric';
// declare const fabric: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  canvas: any;

  constructor() { }

  ngOnInit() {

    this.canvas = new fabric.Canvas('canvas', {
      width: 500,
      height: 300
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
      fill: '#afa'
    }));

    this.canvas.add(new fabric.Triangle({
      left: 300,
      top: 100,
      width: 50,
      height: 150,
      fill: '#aaf'
    }));

    var path = new fabric.Path('M 0 0 L 300 100 L 200 300 z');
    path.set({ fill: 'red', stroke: 'green', opacity: 0.5 });
    this.canvas.add(path);

  //  var pol = new fabric.Polygon([
  //      { x: 200, y: 0 },
  //      { x: 250, y: 50 },
  //      { x: 250, y: 100 },
  //      { x: 150, y: 100 },
  //      { x: 150, y: 50 }], {
  //      left: 10,
  //      top: 10,
  //      angle: 0,
  //      fill: 'red', stroke: 'green', opacity: 0.5
  //    }
  //  );
  //  this.canvas.add(pol);


  }

}
