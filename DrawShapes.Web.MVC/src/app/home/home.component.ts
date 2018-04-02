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
  private canvasContainer: Element = null;
  private errorMessages: string[] = null;

  constructor(private http: Http, private shapesService: ShapesService) {
    this.subscribeForParserResponse();
  }

  ngOnInit() {
    this.canvasContainer = document.getElementsByClassName('canvas-container')[0];

    this.canvas = new fabric.Canvas('canvas', {
      width: this.canvasContainer.clientWidth,
      height: this.canvasContainer.clientHeight
    });
  }

  public draw(): void {
    this.errorMessages = null;
    this.shapesService.parse(this.model.command);
  }

  private subscribeForParserResponse() {
    this.shapesService.parsingCompletedObserver.subscribe(response => {
      if (response != null) {
        if (response.errorMessages != null && response.errorMessages.length > 0) {
          this.canvas.clear();
          this.errorMessages = response.errorMessages;
        } else {
          let shape = response.data;

          shape.top = (this.canvasContainer.clientHeight / 2) - (shape.height / 2);
          shape.left = (this.canvasContainer.clientWidth / 2) - (shape.width / 2);

          this.canvas.clear();
          this.canvas.add(shape.getDrawingObject());
        }
      }
    });
  }
}
