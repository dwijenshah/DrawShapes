import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
//Fabric library is used to draw the shape, as its a flexible library for drawing shapes and also gives ability to end users to select shape objects and resize/rotate it.
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
  canvas: any;  //this is a fabric canvas object, instantiated in ngOnInit method.
  private canvasContainer: Element = null;
  private errorMessages: string[] = null;
  public isProcessing: boolean = false;

  constructor(private http: Http, private shapesService: ShapesService) {
    this.subscribeForParserResponse();
  }

  //Component initialization code.
  ngOnInit() {
    this.canvasContainer = document.getElementsByClassName('canvas-host')[0];

    this.canvas = new fabric.Canvas('canvas', {
      width: this.canvasContainer.clientWidth,
      height: this.canvasContainer.clientHeight
    });
  }

  //Following method calls the shapes service to send the command to server to parse into a shape.
  public draw(): void {
    this.errorMessages = null;
    this.isProcessing = true;
    this.shapesService.parse(this.model.command);
  }

  //This method subscribes to shapes parsing service's response from server and once returned , it draws the shape on the canvas.
  private subscribeForParserResponse() {
    this.shapesService.parsingCompletedObserver.subscribe(response => {
      this.isProcessing = false;

      if (response != null && this.canvas != null && this.canvasContainer != null) {
        if (response.errorMessages != null && response.errorMessages.length > 0) {
          //if errors found in response.
          this.canvas.clear();
          this.errorMessages = response.errorMessages;
        } else {
          //if no errors found in response.
          let shape = response.data;

          if (this.canvasContainer != null) {
            shape.top = (this.canvasContainer.clientHeight / 2) - (shape.height / 2);
            shape.left = (this.canvasContainer.clientWidth / 2) - (shape.width / 2);
          }

          this.canvas.clear();
          this.canvas.add(shape.getDrawingObject());  //this draws the fabric shape on the canvas.
        }
      }
    });
  }
}
